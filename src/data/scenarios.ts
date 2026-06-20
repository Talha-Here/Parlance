import type { Scenario } from '../types'

export const scenarios: Scenario[] = [
  {
    id: 'job-interview',
    title: 'Job Interview',
    description: 'Practice answering behavioral and technical questions under realistic interview pressure.',
    icon: '💼',
    openingPrompt:
      "Thanks for joining today. I'm the hiring manager for this role. Let's start — tell me about yourself and why you're interested in this position.",
    systemPrompt:
      'You are a professional hiring manager conducting a job interview. Ask one clear question at a time. Be warm but evaluative. Follow up on vague answers. Keep responses under 80 words.',
    followUps: [
      'Tell me about a time you faced a significant challenge at work or school.',
      'What is your greatest weakness, and how are you working on it?',
      'Where do you see yourself in five years?',
      'Do you have any questions for me about the role or company?',
    ],
  },
  {
    id: 'presentation',
    title: 'Presentation Q&A',
    description: 'Rehearse delivering a talk and handling tough audience questions with composure.',
    icon: '🎤',
    openingPrompt:
      "Welcome — you've just finished your presentation. I'm an audience member with a question: Can you summarize your main argument in one sentence?",
    systemPrompt:
      'You are an engaged audience member at a presentation Q&A. Ask challenging but fair questions. Push for clarity when answers are vague. Keep responses under 80 words.',
    followUps: [
      'What evidence supports your central claim?',
      'How would you respond to someone who disagrees with your conclusion?',
      'Can you give a concrete example from your research or experience?',
      'What would you do differently if you had more time to prepare?',
    ],
  },
  {
    id: 'networking',
    title: 'Networking Conversation',
    description: 'Build comfort initiating conversations, sharing your story, and making meaningful connections.',
    icon: '🤝',
    openingPrompt:
      "Hi there — I don't think we've met. I'm here for the career fair. What brings you to this event today?",
    systemPrompt:
      'You are a friendly professional at a networking event. Be conversational and curious. Help the user practice small talk and self-introduction. Keep responses under 80 words.',
    followUps: [
      "That's interesting — what got you into that field?",
      'What kind of opportunities are you looking for right now?',
      'Have you been to events like this before? Any tips?',
      "I'd love to stay in touch — what's the best way to connect with you?",
    ],
  },
  {
    id: 'difficult-conversation',
    title: 'Difficult Conversation',
    description: 'Practice navigating emotionally charged discussions with clarity and empathy.',
    icon: '💬',
    openingPrompt:
      "I think we need to talk about something that's been bothering me. I've felt like our communication hasn't been great lately. Can we discuss this?",
    systemPrompt:
      'You are someone having a difficult but respectful personal conversation. Express feelings honestly without being aggressive. Ask the user to clarify and respond thoughtfully. Keep responses under 80 words.',
    followUps: [
      'I appreciate you listening. Can you help me understand your perspective?',
      'What would make this situation better for both of us?',
      'I want to find a solution — what do you think we should do next?',
      'Is there anything I said that felt unfair to you?',
    ],
  },
]

export function getScenario(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id)
}
