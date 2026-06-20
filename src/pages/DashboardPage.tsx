import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getScenario } from '../data/scenarios'
import {
  clearAllData,
  computeMetrics,
  exportExperimentData,
  getProfile,
  getSessions,
} from '../lib/storage'

export default function DashboardPage() {
  const sessions = getSessions()
  const profile = getProfile()
  const metrics = useMemo(() => computeMetrics(), [sessions.length])

  const completed = sessions.filter((s) => s.completed).slice().reverse()

  function handleExport() {
    const blob = new Blob([exportExperimentData()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `parlance-experiment-data-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Your progress</h1>
          <p className="text-slate-600 mt-1">
            {profile
              ? `Segment: ${profile.segment.replace('-', ' ')}`
              : 'Complete onboarding to track your segment.'}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleExport}
            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
          >
            Export experiment data
          </button>
          <button
            type="button"
            onClick={() => {
              if (confirm('Delete all local Parlance data? This cannot be undone.')) {
                clearAllData()
                window.location.reload()
              }
            }}
            className="px-4 py-2 rounded-lg border border-red-200 text-red-600 text-sm font-medium hover:bg-red-50"
          >
            Delete my data
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total sessions', value: metrics.totalSessions },
          { label: 'Completed', value: metrics.completedSessions },
          { label: 'Practice days', value: metrics.uniqueDays },
          {
            label: 'Avg confidence Δ',
            value:
              metrics.avgConfidenceDelta === 0
                ? '—'
                : `${metrics.avgConfidenceDelta > 0 ? '+' : ''}${metrics.avgConfidenceDelta.toFixed(1)}`,
          },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
          </div>
        ))}
      </div>

      <section className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Session history</h2>
        {completed.length === 0 ? (
          <p className="text-slate-500 text-sm">
            No completed sessions yet.{' '}
            <Link to="/practice" className="text-brand-600 hover:underline">
              Start your first practice
            </Link>
          </p>
        ) : (
          <div className="space-y-3">
            {completed.map((session) => {
              const scenario = getScenario(session.scenarioId)
              const delta =
                session.preConfidence && session.postConfidence
                  ? session.postConfidence.overall - session.preConfidence.overall
                  : null
              return (
                <div
                  key={session.id}
                  className="flex flex-wrap items-center justify-between gap-2 py-3 border-b border-slate-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-slate-800">
                      {scenario?.icon} {scenario?.title ?? session.scenarioId}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(session.startedAt).toLocaleString()}
                      {session.durationMinutes != null && ` · ${session.durationMinutes} min`}
                    </p>
                  </div>
                  {delta != null && (
                    <span
                      className={`text-sm font-semibold ${
                        delta >= 0 ? 'text-green-600' : 'text-amber-600'
                      }`}
                    >
                      {delta >= 0 ? '+' : ''}
                      {delta} confidence
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
