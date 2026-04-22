import { Routes, Route } from 'react-router-dom'
import WizardPage from './pages/WizardPage'

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<WizardPage />} />
    </Routes>
  )
}
