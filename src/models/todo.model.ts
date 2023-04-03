export const PRIORITY_OPTIONS = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  CRITICAL: 4
} as const

export type PriorityOptionsKeys = keyof typeof PRIORITY_OPTIONS
export type PriorityOptions = (typeof PRIORITY_OPTIONS)[PriorityOptionsKeys]

export const SEVERITY_OPTIONS = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3,
  CRITICAL: 4
} as const

export type SeverityOptionsKeys = keyof typeof SEVERITY_OPTIONS
export type SeverityOptions = (typeof SEVERITY_OPTIONS)[SeverityOptionsKeys]

export const STATUS_OPTIONS = ['PENDING', 'IN_PROGRESS', 'BLOCKED', 'COMPLETED'] as const

export type StatusOptions = (typeof STATUS_OPTIONS)[number]

export interface Todo {
  id: string
  title: string
  description: string
  priority: PriorityOptions
  severity: SeverityOptions
  status: StatusOptions
  created_at: string
  updated_at: string
}

export type NewTodo = Omit<Todo, 'id' | 'created_at' | 'updated_at'>
