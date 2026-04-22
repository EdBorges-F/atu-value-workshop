import { useState, useCallback } from 'react'

const STORAGE_KEY = 'frontier-canvas-feedback'

interface Props {
  industry?: string
  pillarCount?: number
  storyCount?: number
  useCaseCount?: number
}

export default function PostGenSurvey({ industry, pillarCount, storyCount, useCaseCount }: Props) {
  const [rating, setRating] = useState(0)
  const [missing, setMissing] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback(() => {
    if (!rating) return
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      all.push({
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        rating,
        category: 'Output Quality',
        comment: missing,
        context: {
          wizardStep: 4,
          industry,
          outputMeta: { pillarCount, storyCount, useCaseCount },
          url: window.location.href,
          userAgent: navigator.userAgent,
        },
      })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    } catch { /* localStorage full — no-op */ }
    setSubmitted(true)
  }, [rating, missing, industry, pillarCount, storyCount, useCaseCount])

  if (submitted) {
    return (
      <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center print:hidden">
        <p className="text-sm text-emerald-700 font-medium">✅ Thanks for rating this Value Story!</p>
      </div>
    )
  }

  return (
    <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 space-y-3 print:hidden">
      <p className="text-xs font-semibold text-gray-700">
        📊 How useful is this Value Story for your customer conversation?
      </p>

      {/* 1-5 scale */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            onClick={() => setRating(n)}
            className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${
              rating === n
                ? 'bg-blue-500 text-white shadow-sm'
                : rating > 0 && n <= rating
                  ? 'bg-blue-200 text-blue-700'
                  : 'bg-white text-gray-500 hover:bg-blue-100'
            }`}
          >
            {n === 1 ? 'Not useful' : n === 3 ? 'Helpful' : n === 5 ? 'Excellent' : n}
          </button>
        ))}
      </div>

      {/* Optional missing content */}
      {rating > 0 && (
        <div className="space-y-2">
          <input
            type="text"
            value={missing}
            onChange={(e) => setMissing(e.target.value)}
            placeholder="What's missing or could be better? (optional)"
            className="w-full text-xs border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            onClick={handleSubmit}
            className="text-xs px-4 py-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
