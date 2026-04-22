import { useState } from 'react'

interface TrustBadge {
  icon: string
  label: string
  url: string
  description: string
}

const TRUST_BADGES: TrustBadge[] = [
  {
    icon: '🛡️',
    label: 'Responsible AI',
    url: 'https://www.microsoft.com/en-us/ai/responsible-ai?culture=en-us&country=us',
    description: 'Built following Microsoft Responsible AI principles: fairness, reliability, safety, privacy, inclusiveness, transparency, and accountability.',
  },
  {
    icon: '🔒',
    label: 'SFI',
    url: 'https://www.microsoft.com/en-us/trust-center/security/secure-future-initiative?culture=en-us&country=us',
    description: 'Aligned with the Secure Future Initiative (SFI): secure by design, secure by default, secure in operations.',
  },
  {
    icon: '🔏',
    label: 'Privacy & Trust',
    url: 'https://www.microsoft.com/en-us/trust-center/privacy?culture=en-us&country=us',
    description: 'No customer data is stored server-side. All processing happens in your browser. Session data stays on your device.',
  },
  {
    icon: '📋',
    label: 'Evidence Standards',
    url: 'https://customers.microsoft.com/en-us',
    description: 'All metrics and evidence sourced from published Microsoft customer stories and industry research.',
  },
]

export default function TrustFooter() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <footer className="mt-auto">
      {/* About This Tool Panel */}
      {aboutOpen && (
        <div className="mx-2 mb-3 p-4 rounded-[14px] bg-white/5 border border-white/10 space-y-3 animate-fadeIn">
          <p className="text-xs text-white/70 font-semibold">About Frontier Canvas</p>
          <p className="text-[11px] text-white/50 leading-relaxed">
            Frontier Canvas helps Microsoft Account Executives create evidence-based AI Value Stories
            for customer Industry conversations. It surfaces curated use cases, challenges, and Microsoft
            technology recommendations based on industry context.
          </p>
          <div className="space-y-2">
            {TRUST_BADGES.map((badge) => (
              <a
                key={badge.label}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <span className="text-sm mt-0.5">{badge.icon}</span>
                <div>
                  <p className="text-xs text-white/70 font-medium group-hover:text-white/90 transition-colors">
                    {badge.label} ↗
                  </p>
                  <p className="text-[10px] text-white/40 leading-relaxed mt-0.5">
                    {badge.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-[10px] text-white/30 leading-relaxed pt-1 border-t border-white/5">
            ⚠️ This tool generates AI-assisted content. Always validate with customer-specific
            context before sharing externally. Not a substitute for professional judgment.
          </p>
        </div>
      )}

      {/* Badge Row */}
      <div className="flex items-center justify-between py-3 px-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          {TRUST_BADGES.map((badge) => (
            <a
              key={badge.label}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
              title={`${badge.label}: ${badge.description}`}
            >
              <span>{badge.icon}</span>
              <span className="hidden xl:inline">{badge.label}</span>
            </a>
          ))}
        </div>
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          className="text-[10px] text-white/30 hover:text-white/60 transition-colors"
        >
          {aboutOpen ? 'Close' : 'About'}
        </button>
      </div>
    </footer>
  )
}
