import { Link } from 'react-router-dom'
import { scenarios } from '../data/scenarios'

export default function PracticeSelectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Practice scenarios</h1>
      <p className="text-slate-600 mb-8">
        Select a conversation type. Each session includes a pre- and post-confidence check.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {scenarios.map((scenario) => (
          <Link
            key={scenario.id}
            to={`/practice/${scenario.id}`}
            className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all"
          >
            <span className="text-3xl">{scenario.icon}</span>
            <h2 className="text-lg font-semibold text-slate-800 mt-3">{scenario.title}</h2>
            <p className="text-sm text-slate-500 mt-2">{scenario.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
