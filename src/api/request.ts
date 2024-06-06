import axios from 'axios'

import { ACCESS_TOKEN_KEY, API_BASE_URL, REFRESH_PATH, REFRESH_TOKEN_KEY } from '@/constant'

const instance = axios.create({ baseURL: API_BASE_URL })

instance.interceptors.request.use(
  (config) => {
    console.debug('请求拦截器 - 请求发送前')
    console.debug('请求方法:', config.method)
    console.debug('请求URL:', config.url)
    console.debug('请求参数:', config.params)
    console.debug('请求头:', config.headers)
    config.headers.Authorization = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN_KEY)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

let refreshCount = 0

instance.interceptors.response.use(
  (response) => {
    console.debug('响应拦截器 - 收到响应')
    console.debug('响应状态码:', response.status)
    console.debug('响应数据:', response.data)
    return response.data
  },
  async (error) => {
    console.error('响应拦截器 - 收到错误响应:', error)
    const { config, response } = error

    return new Promise((resolve, reject) => {
      if ((response.status === 401 || config.url === REFRESH_PATH) && refreshCount < 3) {
        ++refreshCount
        instance
          .get(REFRESH_PATH, { params: { refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY) } })
          .then((res) => {
            refreshCount = 0
            localStorage.setItem(ACCESS_TOKEN_KEY, res.data.accessToken)
            localStorage.setItem(REFRESH_TOKEN_KEY, res.data.refreshToken)
            instance(config).then(resolve, reject)
          }, reject)
      } else {
        reject(error)
      }
    })
  }
)

export const http = instance
