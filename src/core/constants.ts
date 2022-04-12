import env from 'core/env'

export const AUTH_TOKEN = 'app/token'
export const BACKEND_ENDPOINT = env('VITE_BACKEND_SERVICE_ENDPOINT', '')
export const PAGE_SIZE = env('VITE_PAGE_SIZE', 10)
