import type { ConfidenceSurvey } from '../types'

interface Props {
  title: string
  subtitle?: string
  values: ConfidenceSurvey
  onChange: (values: ConfidenceSurvey) => void
  onSubmit: () => void
  submitLabel?: string
}

const fields: { key: keyof ConfidenceSurvey; label: string; low: string; high: string }[] = [
  { key: 'overall', label: 'Overall confidence', low: 'Very low', high: 'Very high' },
  { key: 'verbalOrganization', label: 'Verbal organization', low: 'Scattered', high: 'Clear' },
  { key: 'anxietyLevel', label: 'Anxiety level', low: 'Calm', high: 'Very anxious' },
  { key: 'preparedness', label: 'Preparedness', low: 'Unprepared', high: 'Fully ready' },
]

export default function ConfidenceSurveyForm({
  title,
  subtitle,
  values,
  onChange,
  onSubmit,
  submitLabel = 'Continue',
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-slate-800 mb-1">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500 mb-6">{subtitle}</p>}

      <div className="space-y-6">
        {fields.map(({ key, label, low, high }) => (
          <div key={key}>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-slate-700">{label}</span>
              <span className="text-brand-600 font-semibold">{values[key]}/10</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={values[key]}
              onChange={(e) =>
                onChange({ ...values, [key]: Number(e.target.value) })
              }
              className="w-full accent-brand-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>{low}</span>
              <span>{high}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onSubmit}
        className="mt-8 w-full py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
      >
        {submitLabel}
      </button>
    </div>
  )
}

export const defaultConfidence: ConfidenceSurvey = {
  overall: 5,
  verbalOrganization: 5,
  anxietyLevel: 5,
  preparedness: 5,
}
