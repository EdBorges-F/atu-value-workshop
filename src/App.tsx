import { Routes, Route } from 'react-router-dom'
import WizardPage from './pages/WizardPage'
import SessionResumeGate from './components/SessionResumeGate'

export default function App() {
  return (
    <SessionResumeGate>
      <Routes>
        <Route path="/*" element={<WizardPage />} />
      </Routes>
    </SessionResumeGate>
  )
}
