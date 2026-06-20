import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { UserSegment } from '../types'
import { generateId, getProfile, saveProfile } from '../lib/storage'

const segments: { id: UserSegment; label: string; description: string }[] = [
  { id: 'college-student', label: 'College student', description: 'Preparing for internships, interviews, or presentations' },
  { id: 'job-seeker', label: 'Job seeker', description: 'Actively interviewing or networking for new roles' },
  { id: 'professional', label: 'Working professional', description: 'Practicing for meetings, talks, or tough conversations' },
  { id: 'other', label: 'Other', description: 'General communication confidence building' },
]

export default function OnboardingPage() {
  const navigate = useNavigate()
  const existing = getProfile()
  const [segment, setSegment] = useState<UserSegment>(existing?.segment ?? 'college-student')

  function handleContinue() {
    saveProfile({
      id: existing?.id ?? generateId(),
      segment,
      createdAt: existing?.createdAt ?? new Date().toISOString(),
      onboardingComplete: true,
    })
    navigate('/practice')
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome to Parlance</h1>
      <p className="text-slate-600 mb-8">
        Help us personalize your experience. This stays on your device only.
      </p>

      <div className="space-y-3 mb-8">
        {segments.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSegment(s.id)}
            className={`w-full text-left p-4 rounded-xl border transition-colors ${
              segment === s.id
                ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-200'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <span className="font-medium text-slate-800">{s.label}</span>
            <p className="text-sm text-slate-500 mt-1">{s.description}</p>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleContinue}
        className="w-full py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700"
      >
        Continue to practice
      </button>
    </div>
  )
}
