import axios from 'axios'

const baseURL = 'http://127.0.0.1:4523/m1/3805104-0-default'

const instance = axios.create({
  baseURL,
})

instance.interceptors.request.use(
  (config) => {
    console.log('请求拦截器 - 请求发送前')
    console.log('请求方法:', config.method)
    console.log('请求URL:', config.url)
    console.log('请求参数:', config.params)
    console.log('请求头:', config.headers)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    console.log('响应拦截器 - 收到响应')
    console.log('响应状态码:', response.status)
    console.log('响应数据:', response.data)
    return response.data
  },
  (error) => {
    console.error('响应拦截器 - 收到错误响应:', error)
    return Promise.reject(error)
  }
)

export const http = instance
