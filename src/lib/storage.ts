import type {
  ExperimentMetrics,
  PracticeSession,
  PricingIntent,
  ScenarioId,
  UserProfile,
} from '../types'

const KEYS = {
  profile: 'parlance_profile',
  sessions: 'parlance_sessions',
  pricing: 'parlance_pricing_intents',
} as const

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getProfile(): UserProfile | null {
  return read<UserProfile | null>(KEYS.profile, null)
}

export function saveProfile(profile: UserProfile): void {
  write(KEYS.profile, profile)
}

export function getSessions(): PracticeSession[] {
  return read<PracticeSession[]>(KEYS.sessions, [])
}

export function saveSession(session: PracticeSession): void {
  const sessions = getSessions()
  const index = sessions.findIndex((s) => s.id === session.id)
  if (index >= 0) sessions[index] = session
  else sessions.push(session)
  write(KEYS.sessions, sessions)
}

export function getSession(id: string): PracticeSession | undefined {
  return getSessions().find((s) => s.id === id)
}

export function savePricingIntent(intent: PricingIntent): void {
  const intents = read<PricingIntent[]>(KEYS.pricing, [])
  intents.push(intent)
  write(KEYS.pricing, intents)
}

export function getPricingIntents(): PricingIntent[] {
  return read<PricingIntent[]>(KEYS.pricing, [])
}

export function clearAllData(): void {
  Object.values(KEYS).forEach((key) => localStorage.removeItem(key))
}

export function exportExperimentData(): string {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      profile: getProfile(),
      sessions: getSessions(),
      pricingIntents: getPricingIntents(),
      metrics: computeMetrics(),
    },
    null,
    2,
  )
}

function uniqueDays(sessions: PracticeSession[]): number {
  const days = new Set(
    sessions.map((s) => new Date(s.startedAt).toISOString().slice(0, 10)),
  )
  return days.size
}

function avgConfidenceDelta(sessions: PracticeSession[]): number {
  const deltas = sessions
    .filter((s) => s.preConfidence && s.postConfidence)
    .map((s) => s.postConfidence!.overall - s.preConfidence!.overall)
  if (deltas.length === 0) return 0
  return deltas.reduce((a, b) => a + b, 0) / deltas.length
}

export function computeMetrics(): ExperimentMetrics {
  const sessions = getSessions()
  const completed = sessions.filter((s) => s.completed)
  const scenarioBreakdown: Record<ScenarioId, number> = {
    'job-interview': 0,
    presentation: 0,
    networking: 0,
    'difficult-conversation': 0,
  }
  completed.forEach((s) => {
    scenarioBreakdown[s.scenarioId]++
  })

  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
  const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000
  const week1 = sessions.filter((s) => new Date(s.startedAt).getTime() >= twoWeeksAgo && new Date(s.startedAt).getTime() < weekAgo)
  const week2 = sessions.filter((s) => new Date(s.startedAt).getTime() >= weekAgo)
  const week1Users = new Set(week1.map((s) => new Date(s.startedAt).toISOString().slice(0, 10)))
  const week2Users = new Set(week2.map((s) => new Date(s.startedAt).toISOString().slice(0, 10)))
  const retained = [...week1Users].filter((d) => week2Users.has(d)).length
  const retention = week1Users.size > 0 ? retained / week1Users.size : 0

  return {
    totalSessions: sessions.length,
    completedSessions: completed.length,
    uniqueDays: uniqueDays(sessions),
    avgConfidenceDelta: avgConfidenceDelta(completed),
    weekOverWeekRetention: retention,
    scenarioBreakdown,
    pricingIntents: getPricingIntents(),
  }
}

export function generateId(): string {
  return crypto.randomUUID()
}
