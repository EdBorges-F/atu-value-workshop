import { Routes, Route } from 'react-router-dom'
import WizardPage from './pages/WizardPage'
import SessionResumeGate from './components/SessionResumeGate'
import ErrorBoundary from './components/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <SessionResumeGate>
        <Routes>
          <Route path="/*" element={<WizardPage />} />
        </Routes>
      </SessionResumeGate>
    </ErrorBoundary>
  )
}
