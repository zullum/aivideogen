// User types
export interface User {
  id: string
  email: string
  fullName: string
  avatarUrl?: string
  createdAt: string
  updatedAt: string
}

// Video types
export interface Video {
  id: string
  userId: string
  title: string
  description?: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  prompt: string
  videoUrl?: string
  thumbnailUrl?: string
  duration?: number
  resolution: string
  style: string
  createdAt: string
  updatedAt: string
}

// Template types
export interface Template {
  id: string
  name: string
  description: string
  category: string
  thumbnailUrl: string
  previewUrl?: string
  promptTemplate: string
  defaultStyle: string
  defaultDuration: number
  tags: string[]
  isPremium: boolean
  createdAt: string
}

// Generation request types
export interface GenerationRequest {
  prompt: string
  style: string
  duration: number
  resolution: string
  templateId?: string
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination types
export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Webhook types
export interface WebhookPayload {
  event: string
  data: any
  timestamp: string
}

// Error types
export interface AppError {
  message: string
  code?: string
  details?: any
}