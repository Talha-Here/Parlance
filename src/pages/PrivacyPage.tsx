export default function PrivacyPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Privacy & ethical design</h1>
      <p className="text-slate-600">
        Parlance is built for people practicing vulnerable, high-stakes conversations. Privacy is
        not a feature — it is a requirement.
      </p>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Data storage</h2>
        <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
          <li>All session data is stored locally in your browser (localStorage).</li>
          <li>No account or email is required to use Parlance.</li>
          <li>You can export or delete your data anytime from the Dashboard.</li>
          <li>If you configure an OpenAI API key, messages are sent to OpenAI for AI responses only.</li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Bias & inclusion</h2>
        <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
          <li>Scenarios are designed to be culturally neutral and non-clinical.</li>
          <li>Parlance is a rehearsal tool, not a substitute for speech therapy or mental health care.</li>
          <li>AI responses use inclusive language and avoid assumptions about background or ability.</li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Responsible AI use</h2>
        <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
          <li>Simulated mode works offline without sending data to any server.</li>
          <li>System prompts constrain AI to supportive, realistic conversation practice.</li>
          <li>We do not use session content for model training.</li>
        </ul>
      </section>
    </div>
  )
}
