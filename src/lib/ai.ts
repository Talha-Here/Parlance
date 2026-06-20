import type { Scenario } from '../types'
import { getScenario } from '../data/scenarios'

interface AiResponse {
  content: string
  source: 'api' | 'simulated'
}

const MOCK_DELAY_MS = 900

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function pickFollowUp(scenario: Scenario, turnIndex: number): string {
  const followUps = scenario.followUps
  return followUps[turnIndex % followUps.length]
}

function buildSimulatedResponse(
  scenario: Scenario,
  userMessage: string,
  turnIndex: number,
): string {
  const trimmed = userMessage.trim()
  if (trimmed.length < 20) {
    return "I'd like to hear a bit more — could you expand on that? Take your time."
  }
  if (/thank|thanks|appreciate/i.test(trimmed)) {
    return pickFollowUp(scenario, turnIndex + 1)
  }
  const acknowledgments = [
    'Thank you for sharing that.',
    "That's helpful context.",
    'I appreciate your honesty.',
    'Interesting — tell me more.',
  ]
  const ack = acknowledgments[turnIndex % acknowledgments.length]
  return `${ack} ${pickFollowUp(scenario, turnIndex)}`
}

async function callOpenAI(
  scenario: Scenario,
  history: { role: string; content: string }[],
): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  if (!apiKey) throw new Error('No API key')

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: scenario.systemPrompt },
        ...history,
      ],
      max_tokens: 150,
      temperature: 0.7,
    }),
  })

  if (!response.ok) throw new Error(`API error: ${response.status}`)
  const data = await response.json()
  return data.choices[0].message.content as string
}

export async function getAiReply(
  scenarioId: string,
  messages: { role: 'user' | 'assistant'; content: string }[],
): Promise<AiResponse> {
  const scenario = getScenario(scenarioId)
  if (!scenario) throw new Error('Unknown scenario')

  const userTurns = messages.filter((m) => m.role === 'user').length

  if (import.meta.env.VITE_OPENAI_API_KEY) {
    try {
      const content = await callOpenAI(scenario, messages)
      return { content, source: 'api' }
    } catch {
      // fall through to simulated mode
    }
  }

  await delay(MOCK_DELAY_MS)
  const lastUser = [...messages].reverse().find((m) => m.role === 'user')
  const content = buildSimulatedResponse(
    scenario,
    lastUser?.content ?? '',
    userTurns - 1,
  )
  return { content, source: 'simulated' }
}

export function isAiApiConfigured(): boolean {
  return Boolean(import.meta.env.VITE_OPENAI_API_KEY)
}
