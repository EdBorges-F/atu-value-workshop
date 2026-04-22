import { useState, useEffect } from 'react'

const STORAGE_KEY = 'frontier-wizard-data'

export default function SessionResumeGate({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false)
  const [companyName, setCompanyName] = useState('')

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        const name = parsed?.companyName?.trim()
        if (name) {
          setCompanyName(name)
          setShowModal(true)
        }
      }
    } catch {
      // corrupted data — ignore
    }
  }, [])

  function handleResume() {
    setShowModal(false)
  }

  function handleStartFresh() {
    localStorage.removeItem(STORAGE_KEY)
    window.location.reload()
  }

  if (!showModal) return <>{children}</>

  return (
    <>
      {children}
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        {/* Modal */}
        <div className="w-full max-w-md mx-4 rounded-2xl border border-white/10 bg-[#0f172a] p-8 shadow-2xl text-white text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Welcome back</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Resume previous session for{' '}
              <span className="font-semibold text-white">{companyName}</span>?
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleStartFresh}
              className="px-5 py-2.5 rounded-xl border border-white/20 text-sm font-medium text-white/80 hover:bg-white/10 transition-all"
            >
              Start Fresh
            </button>
            <button
              onClick={handleResume}
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
