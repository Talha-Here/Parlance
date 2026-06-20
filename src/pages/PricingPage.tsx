import { useState } from 'react'
import { generateId, savePricingIntent } from '../lib/storage'

const tiers = [
  {
    id: 'free' as const,
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['2 sessions per week', 'Job interview scenario', 'Basic confidence tracking'],
  },
  {
    id: 'student' as const,
    name: 'Student',
    price: '$7.99',
    period: '/month',
    features: [
      'Unlimited sessions',
      'All 4 scenarios',
      'Confidence trend reports',
      'Session export for coaches',
    ],
    highlighted: true,
  },
  {
    id: 'pro' as const,
    name: 'Pro',
    price: '$14.99',
    period: '/month',
    features: [
      'Everything in Student',
      'Custom scenario builder',
      'AI coaching style options',
      'Priority support',
    ],
  },
]

export default function PricingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedTier, setSelectedTier] = useState<'free' | 'student' | 'pro'>('student')
  const [maxPrice, setMaxPrice] = useState(10)
  const [interested, setInterested] = useState(true)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    savePricingIntent({
      id: generateId(),
      tier: selectedTier,
      interested,
      maxPrice: interested ? maxPrice : undefined,
      recordedAt: new Date().toISOString(),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center bg-white rounded-2xl border border-slate-200 p-8">
        <span className="text-4xl mb-4 block">🙏</span>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">Thank you!</h2>
        <p className="text-slate-600">
          Your pricing feedback has been recorded locally and helps us validate willingness to pay.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Simple, honest pricing</h1>
        <p className="text-slate-600">
          We're testing pricing with early users. Your feedback directly shapes our launch plan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-2xl border p-6 ${
              tier.highlighted
                ? 'border-brand-500 bg-brand-50 ring-2 ring-brand-200'
                : 'border-slate-200 bg-white'
            }`}
          >
            <h2 className="text-lg font-semibold text-slate-800">{tier.name}</h2>
            <p className="mt-2">
              <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
              <span className="text-slate-500 text-sm">{tier.period}</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-brand-600">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white rounded-2xl border border-slate-200 p-6 space-y-5"
      >
        <h2 className="text-lg font-semibold text-slate-800">Pricing experiment</h2>
        <p className="text-sm text-slate-500">
          After trying Parlance, would you pay for unlimited access?
        </p>

        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={interested}
              onChange={() => setInterested(true)}
            />
            Yes, I'd consider paying
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={!interested}
              onChange={() => setInterested(false)}
            />
            No, free only
          </label>
        </div>

        {interested && (
          <>
            <div>
              <label className="text-sm font-medium text-slate-700">
                Preferred tier
              </label>
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value as typeof selectedTier)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              >
                <option value="student">Student — $7.99/mo</option>
                <option value="pro">Pro — $14.99/mo</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">
                Max you'd pay per month: ${maxPrice}
              </label>
              <input
                type="range"
                min={3}
                max={25}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full mt-2 accent-brand-600"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700"
        >
          Submit feedback
        </button>
      </form>
    </div>
  )
}
