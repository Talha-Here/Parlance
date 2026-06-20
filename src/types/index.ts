export type ScenarioId = 'job-interview' | 'presentation' | 'networking' | 'difficult-conversation'

export type UserSegment = 'college-student' | 'job-seeker' | 'professional' | 'other'

export interface Scenario {
  id: ScenarioId
  title: string
  description: string
  icon: string
  openingPrompt: string
  systemPrompt: string
  followUps: string[]
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: string
}

export interface ConfidenceSurvey {
  overall: number
  verbalOrganization: number
  anxietyLevel: number
  preparedness: number
}

export interface PracticeSession {
  id: string
  scenarioId: ScenarioId
  startedAt: string
  endedAt?: string
  messages: ChatMessage[]
  preConfidence?: ConfidenceSurvey
  postConfidence?: ConfidenceSurvey
  durationMinutes?: number
  completed: boolean
}

export interface UserProfile {
  id: string
  segment: UserSegment
  createdAt: string
  onboardingComplete: boolean
}

export interface PricingIntent {
  id: string
  tier: 'free' | 'student' | 'pro'
  interested: boolean
  maxPrice?: number
  recordedAt: string
}

export interface ExperimentMetrics {
  totalSessions: number
  completedSessions: number
  uniqueDays: number
  avgConfidenceDelta: number
  weekOverWeekRetention: number
  scenarioBreakdown: Record<ScenarioId, number>
  pricingIntents: PricingIntent[]
}
