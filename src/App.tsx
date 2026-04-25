import { Routes, Route } from 'react-router-dom'
import WizardPage from './pages/WizardPage'
import SessionResumeGate from './components/SessionResumeGate'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold">
        Skip to content
      </a>
      <SessionResumeGate>
        <Routes>
          <Route path="/*" element={<WizardPage />} />
        </Routes>
      </SessionResumeGate>
    </ErrorBoundary>
  )
}
