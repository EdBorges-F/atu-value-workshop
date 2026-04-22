import { useState, useEffect, useCallback } from 'react'

// ─── Types ──────────────────────────────────────────────────
export interface FeedbackEntry {
  id: string
  timestamp: string
  rating: number          // 1-5
  category: string
  comment: string
  context: {
    wizardStep?: number
    industry?: string
    challenges?: string[]
    url: string
    userAgent: string
  }
}

const STORAGE_KEY = 'frontier-canvas-feedback'
const CATEGORIES = ['Usability', 'Data Quality', 'Missing Content', 'Feature Request', 'Bug']
const EMOJIS = ['😐', '🙂', '😊', '😄', '🤩']

// ─── Storage helpers ────────────────────────────────────────
function loadFeedback(): FeedbackEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch { return [] }
}

function saveFeedback(entry: FeedbackEntry) {
  const all = loadFeedback()
  all.push(entry)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
}

export function exportFeedbackCSV() {
  const all = loadFeedback()
  if (!all.length) return alert('No feedback collected yet.')
  const headers = ['timestamp', 'rating', 'category', 'comment', 'wizardStep', 'industry', 'challenges']
  const rows = all.map(f => [
    f.timestamp,
    f.rating,
    f.category,
    `"${(f.comment || '').replace(/"/g, '""')}"`,
    f.context.wizardStep ?? '',
    f.context.industry ?? '',
    (f.context.challenges || []).join('; '),
  ])
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `frontier-canvas-feedback-${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

// ─── Component ──────────────────────────────────────────────
interface Props {
  wizardStep?: number
  industry?: string
  challenges?: string[]
}

export default function FeedbackWidget({ wizardStep, industry, challenges }: Props) {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [category, setCategory] = useState('')
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Ctrl+Shift+F for CSV export
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'F') {
        e.preventDefault()
        exportFeedbackCSV()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleSubmit = useCallback(() => {
    if (!rating) return
    const entry: FeedbackEntry = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      rating,
      category: category || 'General',
      comment,
      context: {
        wizardStep,
        industry,
        challenges,
        url: window.location.href,
        userAgent: navigator.userAgent,
      },
    }
    saveFeedback(entry)
    setSubmitted(true)
    setTimeout(() => {
      setOpen(false)
      setSubmitted(false)
      setRating(0)
      setCategory('')
      setComment('')
    }, 1500)
  }, [rating, category, comment, wizardStep, industry, challenges])

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center text-xl print:hidden"
        title="Share feedback"
      >
        💬
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 print:hidden"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fadeIn">
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-3xl mb-2">✅</p>
                <p className="text-sm font-semibold text-gray-700">Thank you for your feedback!</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-800">Share Feedback</h3>
                  <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-lg">✕</button>
                </div>

                {/* Emoji rating */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">How's your experience?</p>
                  <div className="flex gap-2 justify-center">
                    {EMOJIS.map((emoji, i) => (
                      <button
                        key={i}
                        onClick={() => setRating(i + 1)}
                        className={`text-2xl p-1.5 rounded-lg transition-all ${
                          rating === i + 1
                            ? 'bg-blue-100 scale-110 ring-2 ring-blue-300'
                            : 'hover:bg-gray-100 opacity-60 hover:opacity-100'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <p className="text-xs text-gray-500 mb-1.5">Category</p>
                  <div className="flex flex-wrap gap-1.5">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                          category === cat
                            ? 'bg-blue-50 border-blue-300 text-blue-700 font-medium'
                            : 'border-gray-200 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us more (optional)..."
                    rows={3}
                    className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={!rating}
                  className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
                    rating
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-md'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Feedback
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  Feedback is stored locally on your device.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
