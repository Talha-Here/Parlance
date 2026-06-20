import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ConfidenceSurveyForm, { defaultConfidence } from '../components/ConfidenceSurvey'
import { getScenario } from '../data/scenarios'
import { getAiReply, isAiApiConfigured } from '../lib/ai'
import { generateId, saveSession } from '../lib/storage'
import type { ChatMessage, ConfidenceSurvey, PracticeSession } from '../types'

type Phase = 'pre-survey' | 'chat' | 'post-survey' | 'complete'

export default function PracticePage() {
  const { scenarioId } = useParams<{ scenarioId: string }>()
  const navigate = useNavigate()
  const scenario = scenarioId ? getScenario(scenarioId) : undefined

  const [phase, setPhase] = useState<Phase>('pre-survey')
  const [preConfidence, setPreConfidence] = useState<ConfidenceSurvey>(defaultConfidence)
  const [postConfidence, setPostConfidence] = useState<ConfidenceSurvey>(defaultConfidence)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(() => generateId())
  const [startedAt] = useState(() => new Date().toISOString())
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  if (!scenario) {
    return (
      <div className="text-center">
        <p className="text-slate-600 mb-4">Scenario not found.</p>
        <Link to="/practice" className="text-brand-600 hover:underline">
          Back to scenarios
        </Link>
      </div>
    )
  }

  const activeScenario = scenario

  function persist(partial: Partial<PracticeSession>) {
    saveSession({
      id: sessionId,
      scenarioId: activeScenario.id,
      startedAt,
      messages,
      preConfidence,
      postConfidence,
      completed: false,
      ...partial,
    })
  }

  function startSession() {
    const opening: ChatMessage = {
      id: generateId(),
      role: 'assistant',
      content: activeScenario.openingPrompt,
      timestamp: new Date().toISOString(),
    }
    setMessages([opening])
    persist({ preConfidence, messages: [opening] })
    setPhase('chat')
  }

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)
    persist({ messages: updated, preConfidence })

    const history = updated
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content }))

    try {
      const { content } = await getAiReply(activeScenario.id, history)
      const assistantMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content,
        timestamp: new Date().toISOString(),
      }
      const withReply = [...updated, assistantMsg]
      setMessages(withReply)
      persist({ messages: withReply, preConfidence })
    } finally {
      setLoading(false)
    }
  }

  function finishChat() {
    setPhase('post-survey')
  }

  function completeSession() {
    const endedAt = new Date().toISOString()
    const durationMs = new Date(endedAt).getTime() - new Date(startedAt).getTime()
    saveSession({
      id: sessionId,
      scenarioId: activeScenario.id,
      startedAt,
      endedAt,
      messages,
      preConfidence,
      postConfidence,
      durationMinutes: Math.round(durationMs / 60000),
      completed: true,
    })
    setPhase('complete')
  }

  if (phase === 'pre-survey') {
    return (
      <div>
        <p className="text-sm text-brand-600 font-medium mb-2">
          {activeScenario.icon} {activeScenario.title}
        </p>
        <ConfidenceSurveyForm
          title="Before you begin"
          subtitle="Rate how you feel right now about this type of conversation."
          values={preConfidence}
          onChange={setPreConfidence}
          onSubmit={startSession}
          submitLabel="Start conversation"
        />
      </div>
    )
  }

  if (phase === 'post-survey') {
    return (
      <ConfidenceSurveyForm
        title="Session complete — how do you feel now?"
        subtitle="Compare these ratings to your pre-session scores on the dashboard."
        values={postConfidence}
        onChange={setPostConfidence}
        onSubmit={completeSession}
        submitLabel="Save & view results"
      />
    )
  }

  if (phase === 'complete') {
    const delta = postConfidence.overall - preConfidence.overall
    return (
      <div className="max-w-md mx-auto text-center bg-white rounded-2xl border border-slate-200 p-8">
        <span className="text-4xl mb-4 block">✓</span>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">Great work!</h2>
        <p className="text-slate-600 mb-4">
          Confidence change:{' '}
          <span className={`font-semibold ${delta >= 0 ? 'text-green-600' : 'text-amber-600'}`}>
            {delta >= 0 ? '+' : ''}
            {delta} points
          </span>{' '}
          (overall)
        </p>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => navigate(`/practice/${activeScenario.id}`)}
            className="py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700"
          >
            Practice again
          </button>
          <Link
            to="/dashboard"
            className="py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50"
          >
            View dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-brand-600 font-medium">
            {activeScenario.icon} {activeScenario.title}
          </p>
          <p className="text-xs text-slate-400">
            {isAiApiConfigured() ? 'Live AI mode' : 'Simulated AI mode'}
          </p>
        </div>
        <button
          type="button"
          onClick={finishChat}
          className="text-sm px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
        >
          End session
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white rounded-2xl border border-slate-200 p-4 space-y-4 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                msg.role === 'user'
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-800'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-2xl px-4 py-3 text-sm text-slate-500">
              Thinking...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              sendMessage()
            }
          }}
          placeholder="Type your response... (Enter to send)"
          rows={2}
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
        <button
          type="button"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="px-5 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  )
}
