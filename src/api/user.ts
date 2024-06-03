import { http } from './request'

interface LoginData {
  name: string
  password: string
}

export function login(data: LoginData) {
  return http.post('/api/login', data)
}

export function register(data: LoginData) {
  return http.post('/api/register', data)
}
