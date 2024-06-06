import { http } from './request'

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constant'

interface LoginData {
  name: string
  password: string
}

function tokenHandler(res: any) {
  const { data } = res
  const { accessToken, refreshToken } = data
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  return res
}

export async function login(data: LoginData) {
  return http.post('/api/login', data).then(tokenHandler)
}

export async function register(data: LoginData) {
  return http.post('/api/register', data).then(tokenHandler)
}
