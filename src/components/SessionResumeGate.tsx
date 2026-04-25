import { useState, useEffect, useRef, useCallback } from 'react'

const STORAGE_KEY = 'frontier-canvas-session'

export default function SessionResumeGate({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false)
  const [companyName, setCompanyName] = useState('')

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        const name = parsed?.data?.companyName?.trim()
        if (name) {
          setCompanyName(name)
          setShowModal(true)
        }
      }
    } catch {
      // corrupted data — ignore
    }
  }, [])

  const freshBtnRef = useRef<HTMLButtonElement>(null)
  const resumeBtnRef = useRef<HTMLButtonElement>(null)

  function handleResume() {
    setShowModal(false)
  }

  function handleStartFresh() {
    localStorage.removeItem(STORAGE_KEY)
    window.location.reload()
  }

  // Focus first button on mount
  useEffect(() => {
    if (showModal) {
      freshBtnRef.current?.focus()
    }
  }, [showModal])

  // Trap Tab within the two buttons and handle Escape
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      handleResume()
      return
    }
    if (e.key === 'Tab') {
      const focusable = [freshBtnRef.current, resumeBtnRef.current].filter(Boolean) as HTMLElement[]
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
  }, [handleResume])

  if (!showModal)return <>{children}</>

  return (
    <>
      {children}
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        {/* Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="session-resume-heading"
          onKeyDown={handleKeyDown}
          className="w-full max-w-md mx-4 rounded-2xl border border-white/10 bg-[#0f172a] p-8 shadow-2xl text-white text-center space-y-6"
        >
          <div className="space-y-2">
            <h2 id="session-resume-heading" className="text-xl font-bold">Welcome back</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Resume previous session for{' '}
              <span className="font-semibold text-white">{companyName}</span>?
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              ref={freshBtnRef}
              onClick={handleStartFresh}
              aria-label="Start a fresh session"
              className="px-5 py-2.5 rounded-xl border border-white/20 text-sm font-medium text-white/80 hover:bg-white/10 transition-all"
            >
              Start Fresh
            </button>
            <button
              ref={resumeBtnRef}
              onClick={handleResume}
              aria-label="Resume previous session"
              className="px-5 py-2.5 rounded-xl bg-[#0078D4] text-sm font-medium text-white hover:bg-[#006cbe] transition-all shadow-lg shadow-[#0078D4]/30"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
