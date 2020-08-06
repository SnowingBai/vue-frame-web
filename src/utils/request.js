import axios from 'axios'
import { getToken, reLogin } from './auth'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000
})

service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['access-token'] = getToken()
    }
    return config
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code === 200) return res

    if (res.code === 401 || res.code === 601) reLogin()
    else {
      Message.error({ message: res.message || 'Error' })
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    Message.error({ message: error.message })
    return Promise.reject(error)
  }
)

export default service
