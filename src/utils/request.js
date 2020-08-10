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
    const { status, message, data } = response

    if (status === 200) return data
    else {
      Message.error({ message: message || 'Error' })
      return Promise.reject(new Error(message || 'Error'))
    }
  },
  error => {
    const status = error.response.data.status
    if (status === 401 || status === 601) reLogin()
    else {
      Message.error({ message: error.message })
      return Promise.reject(error)
    }
  }
)

export default service
