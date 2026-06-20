import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import OnboardingPage from './pages/OnboardingPage'
import PracticePage from './pages/PracticePage'
import PracticeSelectPage from './pages/PracticeSelectPage'
import PricingPage from './pages/PricingPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/practice" element={<PracticeSelectPage />} />
          <Route path="/practice/:scenarioId" element={<PracticePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
