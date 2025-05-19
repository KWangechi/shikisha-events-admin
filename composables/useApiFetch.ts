import { useFetch } from 'nuxt/app'

const baseUrl = 'http://localhost:8000/api'

export function useApiFetch<T>(endpoint: string, options: any = {}) {
  return useFetch<T>(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  })
}
