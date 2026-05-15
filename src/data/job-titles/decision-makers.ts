/**
 * Canonical Decision-Maker job titles.
 *
 * These are the senior executive, governance, founder/owner, and
 * public-sector leadership titles that Frontier Canvas treats as
 * stakeholders worth surfacing for an AE's executive conversation.
 *
 * This list is the WHITELIST used by Smart Fill v2 to filter
 * stakeholders extracted from Copilot output. Any title not in this
 * list (or the soft-tier "Chief X Officer" pattern) is dropped.
 *
 * Keep this list English-only for v1. Multi-language variants are
 * tracked in the Smart Fill v2 plan and deferred to a later sprint.
 *
 * Source: curated by Edison Borges from the LinkedIn-style senior
 * executive taxonomy (2026-05-14).
 */

export const DECISION_MAKER_TITLES: readonly string[] = [
  // Chief X Officer titles — commercial C-suite
  'Chief Academic Officer',
  'Chief Accounting Officer',
  'Chief Artificial Intelligence Officer',
  'Chief Audit Executive',
  'Chief Blockchain Officer',
  'Chief Communications Officer',
  'Chief Compliance Officer',
  'Chief Customer Service Officer',
  'Chief Data Officer',
  'Chief Data Scientist',
  'Chief Developer',
  'Chief Digital Officer',
  'Chief Diversity and Inclusion Officer',
  'Chief Economist',
  'Chief Enterprise Architect',
  'Chief Executive Officer',
  'Chief Experience Officer',
  'Chief Financial Officer',
  'Chief Human Resources Officer',
  'Chief Information Officer',
  'Chief Information Security Officer',
  'Chief Information Technology Architect',
  'Chief Information Technology Officer',
  'Chief Innovation Officer',
  'Chief Intellectual Property Officer',
  'Chief Knowledge Officer',
  'Chief Legal Officer',
  'Chief Marketing Officer',
  'Chief Medical Information Officer',
  'Chief Medical Officer',
  'Chief Nursing Officer',
  'Chief of Department',
  'Chief of Police',
  'Chief of Staff',
  'Chief Operations Officer',
  'Chief Privacy Officer',
  'Chief Procurement Officer',
  'Chief Product Officer',
  'Chief Program Officer',
  'Chief Project Officer',
  'Chief Research Officer',
  'Chief Revenue Officer',
  'Chief Risk Officer',
  'Chief Sales Officer',
  'Chief Scientific Officer',
  'Chief Security Architect',
  'Chief Solutions Architect',
  'Chief Supply Chain Officer',
  'Chief Sustainability Officer',
  'Chief Talent Officer',
  'Chief Technology Architect',
  'Chief Technology Officer',
  'Chief Transformation Officer',

  // Governance — board and oversight
  'Board Member',
  'Corporate Board Member',
  'Non-Profit Board Member',
  'Chairperson',

  // Founder / Owner
  'Founder',
  'Business Owner',
  'Owner',

  // Public sector / Government / Education leadership
  'Bursar',
  'Governor',
  'Minister',
  'Mayor',
  'President',
  'Provost',
  'Superintendent',

  // Senior peer
  'Managing Director',
] as const

/**
 * Lowercase lookup index for O(1) exact-match validation.
 * Built once at module load.
 */
export const DECISION_MAKER_TITLES_LC: ReadonlySet<string> = new Set(
  DECISION_MAKER_TITLES.map((t) => t.toLowerCase()),
)
