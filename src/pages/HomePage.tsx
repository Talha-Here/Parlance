import { Link } from 'react-router-dom'
import { scenarios } from '../data/scenarios'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center max-w-2xl mx-auto pt-4">
        <p className="text-brand-600 font-medium text-sm uppercase tracking-wide mb-3">
          Conversation rehearsal for when it matters
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Practice high-pressure conversations in a safe space
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Parlance helps you rehearse job interviews, presentations, networking, and difficult
          conversations through adaptive AI simulations — so you show up confident when it counts.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/onboarding"
            className="px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
          >
            Start practicing
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
          >
            View progress
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Choose your scenario
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {scenarios.map((scenario) => (
            <Link
              key={scenario.id}
              to={`/practice/${scenario.id}`}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all text-left"
            >
              <span className="text-3xl mb-3 block">{scenario.icon}</span>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-brand-700">
                {scenario.title}
              </h3>
              <p className="text-sm text-slate-500 mt-2">{scenario.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Why Parlance?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-medium text-slate-800 mb-1">Low-pressure rehearsal</h3>
            <p className="text-slate-500">
              Practice responses without judgment. Build verbal organization at your own pace.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 mb-1">Adaptive AI feedback</h3>
            <p className="text-slate-500">
              AI simulates realistic conversation partners and follow-up questions.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-slate-800 mb-1">Privacy-first design</h3>
            <p className="text-slate-500">
              Session data stays in your browser. No account required. Delete anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
