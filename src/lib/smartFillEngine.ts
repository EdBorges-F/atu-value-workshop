import { INDUSTRIES } from '../data/industries'
import { CHALLENGES } from '../data/challenges'
import { USE_CASES } from '../data/use-cases'
import { PRIORITY_KEYWORDS } from '../data/priority-keywords'
import type { CompanySize } from '../data/types'

/**
 * Smart Fill extraction result.
 * ONLY extracts fields that map to existing wizard fields.
 * Lesson learned: never import data with no place in the flow.
 */
export interface SmartFillResult {
  companyName: { value: string; confidence: 'high' | 'medium' | 'low' } | null
  industryId: { value: string; confidence: 'high' | 'medium' | 'low' } | null
  companySize: { value: CompanySize; confidence: 'high' | 'medium' | 'low' } | null
  priorities: { value: string; confidence: 'high' | 'medium' | 'low' } | null
  suggestedChallengeIds: { value: string[]; confidence: 'high' | 'medium' | 'low' } | null
  suggestedUseCaseIds: { value: string[]; confidence: 'high' | 'medium' | 'low' } | null
  contacts: { value: { name: string; title: string; email?: string }[]; confidence: 'high' | 'medium' | 'low' } | null
}

// Rejects org/role category labels that look superficially like names
const _NON_PERSON_ORG_RE = /\b(leadership|management|team|group|board|committee|department|division)\b/i
// Rejects Copilot's own suggestion/commentary lines that bleed into stakeholder sections
const _COPILOT_COMMENTARY_RE = /^(if\s+you|i\s+can|next\s+steps?|converting|creating|generating|building|developing|drafting|let\s+me|here\s+are|you\s+can)/i

/**
 * Returns true only if `name` plausibly looks like a person's name.
 * Rejects org category labels ("Technology and Operations Leadership"),
 * C-suite title prefixes ("CIO / CISO-level roles"), and names containing "and".
 */
const _looksLikePerson = (name: string): boolean => {
  const words = name.trim().split(/\s+/)
  if (words.length < 2) return false
  if (_NON_PERSON_ORG_RE.test(name)) return false
  if (/^(CIO|CTO|CISO|CFO|CEO|COO|CRO|VP|SVP|EVP|Director|Managing|Chief|Head)\b/i.test(name)) return false
  if (/\band\b/i.test(name)) return false
  // Reject common sentence starters — catches Copilot commentary if it bypasses the section pre-filter
  if (/^(if|the|a|an|for|with|to|in|on|at|by|from|i\s)\b/i.test(name)) return false
  const firstName = words[0]
  if (firstName.length < 2 || firstName.length > 15 || /\d/.test(firstName)) return false
  return true
}

// Precompiled keyword matchers — normalise hyphens/slashes to spaces before matching
// so 'capital markets' matches 'capital-markets', and 'car' does NOT match 'healthcare'
const _normalise = (s: string) => s.replace(/[-/]/g, ' ').toLowerCase()
const KEYWORD_REGEXES: Map<string, RegExp[]> = new Map()
const _buildKwRegex = (kw: string): RegExp => {
  const norm = _normalise(kw).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp('(?<![a-z0-9])' + norm + '(?![a-z0-9])', 'i')
}
const _kwMatch = (normalisedText: string, kw: string): boolean => {
  const cached = KEYWORD_REGEXES.get(kw)
  if (cached) return cached.some((r) => r.test(normalisedText))
  const re = _buildKwRegex(kw)
  KEYWORD_REGEXES.set(kw, [re])
  return re.test(normalisedText)
}

// Industry keyword matching
const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  'automotive': ['automotive', 'vehicle', 'car', 'oem', 'mobility', 'motor', 'auto parts'],
  'banking': ['banking', 'bank', 'financial services', 'fintech', 'deposit', 'lending', 'mortgage'],
  'capital-markets': ['capital markets', 'asset management', 'hedge fund', 'brokerage', 'wealth management', 'securities', 'derivatives', 'equity fund'],
  'consumer-goods': ['consumer goods', 'cpg', 'fmcg', 'food and beverage', 'consumer products', 'packaged goods', 'beverage', 'food service', 'foodservice', 'footwear brand', 'fashion brand', 'apparel brand'],
  'energy-resources': ['energy', 'oil', 'gas', 'mining', 'utilities', 'renewable', 'power generation', 'petroleum', 'lime', 'limestone', 'minerals', 'chemicals'],
  'government': ['government', 'public sector', 'federal', 'state agency', 'municipal', 'defense', 'civic'],
  'healthcare-provider': ['healthcare', 'hospital', 'health system', 'clinical', 'patient care', 'physician', 'medical center'],
  'healthcare-medtech': ['medtech', 'medical device', 'pharma', 'pharmaceutical', 'biotech', 'life sciences', 'drug'],
  'higher-education': ['university', 'college', 'higher education', 'academic', 'campus', 'research institution'],
  'insurance': ['insurance', 'insurer', 'underwriting', 'claims', 'actuarial', 'policy', 'reinsurance'],
  'manufacturing': ['manufacturing', 'factory', 'production', 'industrial', 'plant', 'assembly', 'fabrication', 'materials', 'footwear', 'shoes', 'apparel', 'fashion', 'clothing', 'textiles', 'garments', 'calcados', 'calçados'],
  'media-entertainment': ['media', 'entertainment', 'broadcast', 'streaming', 'gaming', 'content', 'publishing', 'studio'],
  'mobility-travel': ['travel', 'hospitality', 'airline', 'hotel', 'transportation', 'logistics', 'fleet', 'tourism'],
  'retail': ['retail', 'e-commerce', 'ecommerce', 'store', 'shop', 'omnichannel', 'merchandise', 'restaurant', 'restaurants', 'dining', 'casual dining', 'quick service', 'hospitality', 'grocery'],
  'telecommunications': ['telecom', 'telecommunications', 'carrier', 'network operator', 'broadband', '5g', 'wireless'],
  'professional-services': ['consulting', 'professional services', 'legal', 'accounting', 'advisory', 'engineering services'],
}

const SIZE_PATTERNS: { pattern: RegExp; value: CompanySize; confidence: 'high' | 'medium' }[] = [
  { pattern: /(\d{1,3},?\d{3}\+?\s*employees|\d{5,}\+?\s*employees)/i, value: 'enterprise', confidence: 'high' },
  { pattern: /enterprise|global\s+(?:company|organization|corporation)/i, value: 'enterprise', confidence: 'medium' },
  { pattern: /(?:2[,.]?5\d{2}|[3-9][,.]?\d{3})\s*employees/i, value: 'large', confidence: 'high' },
  { pattern: /large\s+(?:company|organization|corporation)/i, value: 'large', confidence: 'medium' },
  { pattern: /(?:5\d{2}|[6-9]\d{2}|1[,.]?\d{3}|2[,.]?[0-4]\d{2})\s*employees/i, value: 'mid', confidence: 'high' },
  { pattern: /mid[- ]?(?:market|size|sized)/i, value: 'mid', confidence: 'medium' },
  { pattern: /(?:[1-4]\d{2}|small)\s*employees/i, value: 'small', confidence: 'high' },
  { pattern: /small\s+(?:business|company)|smb|startup/i, value: 'small', confidence: 'medium' },
]

// LinkedIn-style range patterns (e.g. "2,500-10,000" without "employees")
// Ordered from largest to smallest to match greedily
const SIZE_RANGE_PATTERNS: { pattern: RegExp; value: CompanySize }[] = [
  { pattern: /(?:10[,.]?001|50[,.]?001|100[,.]?000)\s*[-–—]\s*\d/i, value: 'enterprise' },
  { pattern: /(?:10[,.]?001|[1-9]\d{4,})[\d,.]*\+/i, value: 'enterprise' }, // "10,001+" with min threshold
  { pattern: /(?:2[,.]?500|5[,.]?001|10[,.]?000)\s*[-–—]\s*\d/i, value: 'large' },
  { pattern: /(?:1[,.]?001|501|1[,.]?000)\s*[-–—]\s*(?:5[,.]?000|2[,.]?500|10[,.]?000)/i, value: 'mid' },
  { pattern: /(?:201|51|500)\s*[-–—]\s*(?:500|1[,.]?000|200)/i, value: 'small' },
  { pattern: /(?:1|2|11|50)\s*[-–—]\s*(?:50|200|10|500)/i, value: 'small' },
]

/**
 * Extract structured data from pasted text.
 * Only populates fields that exist in the wizard.
 */
export function extractSmartFill(rawText: string): SmartFillResult {
  // Pre-process: strip source citations and markdown formatting
  const cleaned = rawText
    .replace(/\[\d+\]:\s*https?:\/\/[^\n]*/g, '')
    .replace(/\(\d+\)\s*https?:\/\/[^\n]*/g, '')
    .replace(/^Sources?:.*$/gim, '')
    .replace(/^References?:.*$/gim, '')
    // Escaped bracket links \[text\](url) — always artifacts in CRM paste
    .replace(/\\\[[^\]\n]*\]\([^\)\n]*\)?/g, '')
    // Links where the display text IS a URL or bare domain (e.g. [riministreet.com](url))
    .replace(/\[(?:https?:\/\/|www\.|\w[\w.-]+\.\w{2,6})[^\]\n]*\]\([^\)\n]*\)?/g, '')
    // Standard [text](https://url) → keep display text
    .replace(/\[([^\]]*)\]\(https?:\/\/[^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/^\s*[-•]\s*\[?\d*\]?.*https?.*$/gim, '')
    // Clean up orphaned backslash-escaped brackets left after link stripping
    .replace(/\\([\[\]])/g, '')
    .replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1')
    // Sales Agent CRM format: section headers are concatenated directly onto the
    // previous line's value with no separator (e.g. "GRENDENE CALÇADOS SAIndustry",
    // "RetailCompany Size", "Strategic PrioritiesCost optimization…").
    // Insert a newline before each known header when it appears mid-line.
    .replace(/(\S)(Industry|Company\s+Size|Strategic\s+Priorities|Key\s+Priorities|Key\s+Challenges|Business\s+Challenges|Key\s+Stakeholders|Key\s+Contacts)\b/g, '$1\n$2')
    // Clean orphaned punctuation left after URL/link stripping (e.g. ", ," or trailing ", ")
    .replace(/,\s*,/g, ',')
    .replace(/\.\s*,/g, '.')
    .replace(/,\s*\./g, '.')
    .replace(/(?:^|\n)\s*,\s*/g, '\n')
    .replace(/,\s*$/gm, '')
    .trim()

  if (!cleaned) return { companyName: null, industryId: null, companySize: null, priorities: null, suggestedChallengeIds: null, suggestedUseCaseIds: null, contacts: null }

  const normLower = _normalise(cleaned)

  // Parse structured sections: "Label\nContent..." or "Label: Content..." or "Label — Content..."
  // Copilot typically outputs: header line, then content on following lines until next header
  const sectionHeaders = [
    { key: 'companyName', patterns: [/^company\s*name/i] },
    { key: 'industry', patterns: [/^industry/i] },
    { key: 'companySize', patterns: [/^company\s*size/i, /^size/i, /^employees?/i] },
    { key: 'priorities', patterns: [/^strategic\s*priorities/i, /^priorities/i, /^key\s*priorities/i] },
    { key: 'challenges', patterns: [/^key\s*challenges/i, /^challenges/i, /^business\s*challenges/i, /^pain\s*points/i] },
    { key: 'stakeholders', patterns: [/^key\s*stakeholders/i, /^stakeholders/i, /^contacts?/i, /^key\s*contacts/i, /^decision\s*makers?/i, /^customer\s*contacts/i] },
  ]

  // Split into lines, identify sections
  const lines = cleaned.split('\n').map((l) => l.trim()).filter((l) => l.length > 0)
  const sections: Record<string, string[]> = {}
  let currentKey: string | null = null

  for (const line of lines) {
    // Strip numbered prefixes and bullet points before checking headers
    const stripped = line.replace(/^\d+[\.\)]\s*/, '').replace(/^[-•]\s*/, '').trim()
    // Check if this line is a section header
    let foundHeader = false
    for (const sh of sectionHeaders) {
      for (const pat of sh.patterns) {
        if (pat.test(stripped)) {
          currentKey = sh.key
          // Check if there's content after a separator on the same line
          const afterSep = stripped.replace(pat, '').replace(/^\s*[-–—:=]\s*/, '').trim()
          if (afterSep.length > 2) {
            if (!sections[currentKey]) sections[currentKey] = []
            sections[currentKey].push(afterSep)
          }
          foundHeader = true
          break
        }
      }
      if (foundHeader) break
    }
    if (!foundHeader && currentKey) {
      // Content line under current section — strip numbered prefixes
      const content = line.replace(/^\d+[\.\)]\s*/, '').replace(/^[-•]\s*/, '').trim()
      if (content.length > 0) {
        if (!sections[currentKey]) sections[currentKey] = []
        sections[currentKey].push(content)
      }
    }
  }

  // 1. Company Name
  let companyName: SmartFillResult['companyName'] = null
  if (sections.companyName && sections.companyName.length > 0) {
    // Strip Outlook/CRM encoding artifacts: [ENC: ...](url), then any residual [text](...)
    const raw = sections.companyName[0]
      .replace(/\s*\[ENC:[^\]\n]*\](\([^\)\n]*\))?/gi, '')
      .replace(/\s*\[[^\]\n]*\](\([^\)\n]*\))?/g, '')
      .replace(/\s*\(.*?\)\s*/g, '')
      .trim()
    if (raw.length >= 2) {
      companyName = { value: raw, confidence: 'high' }
    }
  }
  // Fallback: old regex patterns
  if (!companyName) {
    const namePatterns = [
      /company\s*name\s*[-–—:=]\s*([^\n,;(]+)/i,
      /(?:account|customer|client)\s*(?:name)?\s*[-–—:=]\s*([^\n,;(]+)/i,
    ]
    for (const pat of namePatterns) {
      const match = cleaned.match(pat)
      if (match?.[1] && match[1].trim().length >= 2) {
        companyName = { value: match[1].trim(), confidence: 'high' }
        break
      }
    }
  }

  // 2. Industry — keyword matching against our canonical 16
  // Priority: if Copilot output has an explicit "Industry:" section, match against that first.
  // A match in the explicit section always wins with 'high' confidence.
  let industryId: SmartFillResult['industryId'] = null
  let bestIndustryScore = 0
  let explicitSectionMatch = false

  if (sections.industry && sections.industry.length > 0) {
    const sectionText = _normalise(sections.industry.join(' '))
    for (const [id, keywords] of Object.entries(INDUSTRY_KEYWORDS)) {
      let score = 0
      for (const kw of keywords) {
        if (_kwMatch(sectionText, kw)) score++
      }
      if (score > 0 && score > bestIndustryScore) {
        bestIndustryScore = score
        const ind = INDUSTRIES.find((i) => i.id === id)
        if (ind) {
          industryId = { value: id, confidence: 'high' }
          explicitSectionMatch = true
        }
      }
    }
  }

  // Fallback: full-text keyword scan (only if no explicit section match)
  if (!explicitSectionMatch) {
    bestIndustryScore = 0
    for (const [id, keywords] of Object.entries(INDUSTRY_KEYWORDS)) {
      let score = 0
      for (const kw of keywords) {
        if (_kwMatch(normLower, kw)) score++
      }
      if (score > bestIndustryScore) {
        bestIndustryScore = score
        const ind = INDUSTRIES.find((i) => i.id === id)
        if (ind) {
          industryId = {
            value: id,
            confidence: score >= 3 ? 'high' : score >= 2 ? 'medium' : 'low',
          }
        }
      }
    }
  }

  // 3. Company Size
  let companySize: SmartFillResult['companySize'] = null
  // First: check explicit section for LinkedIn-style range (e.g. "2,500-10,000")
  if (sections.companySize && sections.companySize.length > 0) {
    const sizeText = sections.companySize.join(' ')
    for (const rp of SIZE_RANGE_PATTERNS) {
      if (rp.pattern.test(sizeText)) {
        companySize = { value: rp.value, confidence: 'high' }
        break
      }
    }
    // Fallback: standard patterns against section text
    if (!companySize) {
      for (const sp of SIZE_PATTERNS) {
        if (sp.pattern.test(sizeText)) {
          companySize = { value: sp.value, confidence: sp.confidence }
          break
        }
      }
    }
  }
  // Fallback: full-text scan with standard patterns
  if (!companySize) {
    for (const sp of SIZE_PATTERNS) {
      if (sp.pattern.test(cleaned)) {
        companySize = { value: sp.value, confidence: sp.confidence }
        break
      }
    }
  }

  // 4. Priorities — combine strategic priorities + key challenges sections
  let priorities: SmartFillResult['priorities'] = null
  const priorityLines: string[] = []
  if (sections.priorities) {
    for (const line of sections.priorities) {
      // Strip sub-descriptions (indented explanations), keep main priority titles
      const stripped = line.replace(/^\s+/, '')
      if (stripped.length > 5) priorityLines.push(stripped)
    }
  }
  if (sections.challenges) {
    for (const line of sections.challenges) {
      const stripped = line.replace(/^\s+/, '')
      if (stripped.length > 5) priorityLines.push(stripped)
    }
  }
  if (priorityLines.length > 0) {
    priorities = {
      value: priorityLines.join('; '),
      confidence: priorityLines.length >= 3 ? 'high' : 'medium',
    }
  }

  // Fallback: generate from industry/size if no priorities found
  if (!priorities && (industryId || companySize)) {
    const fallback = generateFallbackPriorities(
      industryId?.value as string | undefined,
      companySize?.value
    )
    if (fallback) {
      priorities = { value: fallback, confidence: 'low' }
    }
  }

  // 5. Challenge suggestions — match against priority keywords
  let suggestedChallengeIds: SmartFillResult['suggestedChallengeIds'] = null
  const challengeScores = new Map<string, number>()
  for (const pk of PRIORITY_KEYWORDS) {
    let score = 0
    for (const kw of pk.keywords) {
      if (_kwMatch(normLower, kw)) score++
    }
    if (score > 0) challengeScores.set(pk.challengeId, score)
  }
  if (challengeScores.size > 0) {
    const sorted = [...challengeScores.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([id]) => id)
    // Verify they exist in our challenges
    const valid = sorted.filter((id) => CHALLENGES.some((c) => c.id === id))
    if (valid.length > 0) {
      suggestedChallengeIds = {
        value: valid,
        confidence: sorted.length >= 3 ? 'high' : 'medium',
      }
    }
  }

  // 6. Cross-reference: suggest use cases that match detected industry + challenges + priorities
  let suggestedUseCaseIds: SmartFillResult['suggestedUseCaseIds'] = null
  const detectedIndustry = industryId?.value as string | undefined
  const detectedChallenges = suggestedChallengeIds?.value as string[] | undefined

  if (detectedIndustry && detectedChallenges && detectedChallenges.length > 0) {
    // Find use cases that match the industry AND at least one detected challenge
    const matchedUCs = USE_CASES.filter(
      (uc) =>
        uc.industryIds.includes(detectedIndustry) &&
        uc.challengeIds.some((cid) => detectedChallenges.includes(cid))
    )

    // Score use cases by how many challenges they address + keyword match in description
    const scored = matchedUCs.map((uc) => {
      let score = uc.challengeIds.filter((cid) => detectedChallenges.includes(cid)).length * 3
      // Bonus if use case description keywords match the priorities text
      const ucWords = uc.name.toLowerCase().split(/\s+/)
      for (const word of ucWords) {
        if (word.length > 4 && _kwMatch(normLower, word)) score += 1
      }
      // Bonus for size relevance
      if (companySize && uc.sizeRelevance.includes(companySize.value)) score += 1
      return { id: uc.id, score }
    })

    const topUCs = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((s) => s.id)

    if (topUCs.length > 0) {
      suggestedUseCaseIds = {
        value: topUCs,
        confidence: topUCs.length >= 4 ? 'high' : topUCs.length >= 2 ? 'medium' : 'low',
      }
    }
  }

  // 7. CRM Contacts — extract name + title pairs from stakeholder/contact sections
  let contacts: SmartFillResult['contacts'] = null
  const extractedContacts: { name: string; title: string; email?: string }[] = []
  const addContact = (name: string, title: string, email?: string) => {
    const clean = name.trim()
    const cleanTitle = title
      .replace(/\s*[-–—]\s+(?:responsible|leads?|oversee|manage|drive|focus).*/i, '') // strip descriptions
      .replace(/\s*\(.*?\)/, '')
      .trim()
    if (clean.length >= 3 && cleanTitle.length >= 2 &&
        _looksLikePerson(clean) &&
        !extractedContacts.some(c => c.name.toLowerCase() === clean.toLowerCase())) {
      extractedContacts.push({ name: clean, title: cleanTitle, email })
    }
  }

  // Flexible name regex: allows periods (Dr., Jr.), lowercase particles (de, van, la), 2-5 words
  const NAME_RE = /[A-Z][a-zA-Z.''-]+(?:\s+(?:de|van|von|la|del|di|el|al|bin|da)\s+)?(?:\s+[A-Za-z.''-]+){1,4}/

  // Pre-filter: strip Copilot's own commentary lines from stakeholder section before extraction
  // (e.g. "If you want next steps I can support include: Converting this into...")
  const stakeholderLines = (sections.stakeholders ?? []).filter(
    l => !_COPILOT_COMMENTARY_RE.test(l.trim())
  )

  // Sentinel values indicating "not found" — skip these lines
  const _NOT_FOUND_RE = /\bnot\s+found\b|\bnot\s+identified\b|\bunknown\b|\bN\/A\b|\bTBD\b/i
  const processedLines = new Set<number>()

  // Pattern 0: "TITLE_ABBREV: Name — Full Title (source: xxx)" format
  // e.g. "CIO: Amith Nair — Chief Information Officer (source: CRM)"
  for (let i = 0; i < stakeholderLines.length; i++) {
    const line = stakeholderLines[i]
    const smartFillMatch = line.match(/^(?:CTO|CIO|CDO|CISO|CFO|CEO|COO|CRO|VP|SVP|EVP|Director)\s*:\s*(.+?)\s*[-–—]\s*(.+)/i)
    if (smartFillMatch) {
      const nameCandidate = smartFillMatch[1].trim()
      const titleCandidate = smartFillMatch[2].replace(/\s*\(source:.*?\)\s*/gi, '').trim()
      if (_NOT_FOUND_RE.test(nameCandidate)) { processedLines.add(i); continue }
      addContact(nameCandidate, titleCandidate)
      processedLines.add(i)
      continue
    }
    // Pattern 0b: "Role Label: Not found — Full Title (source: web)" — skip sentinel lines
    if (_NOT_FOUND_RE.test(line)) { processedLines.add(i); continue }
  }

  // Pattern 1: Structured section "Name — Title" or "Name: Title" or "Name, Title"
  for (let i = 0; i < stakeholderLines.length; i++) {
    if (processedLines.has(i)) continue
    const line = stakeholderLines[i]
    if (_NOT_FOUND_RE.test(line)) continue
    const sepMatch = line.match(new RegExp(`^(${NAME_RE.source})\\s*[-–—:,]\\s*(.+)`, 'i'))
    if (sepMatch) {
      addContact(sepMatch[1], sepMatch[2])
      continue
    }
    // Pattern 1b: "Title: Name" or "Title — Name" (title-first format)
    // Only match when the value after separator looks like a person name (not "Name — Title")
    const titleFirstMatch = line.match(/^((?:CTO|CIO|CDO|CISO|CFO|CEO|COO|CRO|VP|SVP|EVP|Director|Managing Director|Chief\s+\w+\s*Officer)[^:–—,]*)\s*[-–—:,]\s*(.+)/i)
    if (titleFirstMatch) {
      const afterSep = titleFirstMatch[2].trim()
      // If afterSep contains a secondary separator (—), it's "ABBREV: Name — Full Title" — handled by Pattern 0
      if (/\s*[-–—]\s*/.test(afterSep)) continue
      addContact(afterSep, titleFirstMatch[1])
      continue
    }
  }

  // Pattern 2: Scan full text for "Role / Title:" header followed by value (Sales Agent CRM format)
  const titlePattern = /\*{0,2}(?:Role|Title|Role\s*\/\s*Title)\s*(?:\/\s*Title)?:?\*{0,2}\s*(.+)/i
  const emailPattern = /\*{0,2}Email:?\*{0,2}\s*<?([^\s<>@]+@[^\s<>]+)>?/i

  const contactBlocks = rawText.split(/(?=###?\s)/)
  for (const block of contactBlocks) {
    const nameMatch = block.match(new RegExp(`###?\\s*\\*{0,2}(${NAME_RE.source})\\*{0,2}`))
    if (!nameMatch) continue
    const titleMatch = block.match(titlePattern)
    if (!titleMatch) continue
    const emailMatch = block.match(emailPattern)
    addContact(nameMatch[1], titleMatch[1], emailMatch ? emailMatch[1].trim() : undefined)
  }

  // Pattern 3: Inline "Name (Title)" — ALWAYS runs (supplements, not fallback)
  const C_TITLES = 'CTO|CIO|CDO|CISO|CFO|CEO|COO|CRO|VP|SVP|EVP|Director|Sr\\.?\\s*Director|Chief\\s+\\w+\\s*Officer|Head\\s+of'
  const inlinePattern = new RegExp(`(${NAME_RE.source})\\s*\\((?:${C_TITLES})[^)]*\\)`, 'gi')
  let m
  while ((m = inlinePattern.exec(rawText)) !== null) {
    const name = m[0].match(/^[^(]+/)?.[0]?.trim() || ''
    const title = m[0].match(/\(([^)]+)\)/)?.[1]?.trim() || ''
    if (name && title) addContact(name, title)
  }

  // Pattern 4: Semicolon-separated contacts on one line ("Name, Title; Name, Title")
  for (const line of stakeholderLines) {
    if (line.includes(';')) {
      const parts = line.split(';')
      for (const part of parts) {
        const pMatch = part.trim().match(new RegExp(`^(${NAME_RE.source})\\s*[-–—:,]\\s*(.+)`, 'i'))
        if (pMatch) addContact(pMatch[1], pMatch[2])
      }
    }
  }

  if (extractedContacts.length > 0) {
    contacts = {
      value: extractedContacts.slice(0, 10),
      confidence: extractedContacts.length >= 3 ? 'high' : extractedContacts.length >= 2 ? 'medium' : 'low',
    }
  }

  return { companyName, industryId, companySize, priorities, suggestedChallengeIds, suggestedUseCaseIds, contacts }
}

/**
 * Generate standard priorities based on industry themes + size context.
 * Used as fallback when no priorities are extracted from paste.
 */
function generateFallbackPriorities(indId?: string, size?: CompanySize): string | null {
  const industry = indId ? INDUSTRIES.find((i) => i.id === indId) : null
  if (!industry) return null

  // Use industry themes as base priorities
  const themes = industry.themes.slice(0, 4)

  // Add size-specific modifiers
  const sizeContext: Record<string, string> = {
    small: 'Scaling efficiently with limited resources',
    mid: 'Balancing growth with operational maturity',
    large: 'Managing complexity across business units',
    enterprise: 'Driving transformation at global scale while managing risk',
  }

  const parts = [...themes]
  if (size && sizeContext[size]) {
    parts.push(sizeContext[size])
  }

  return parts.join('\n• ')
}
