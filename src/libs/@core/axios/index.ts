import { domainDefault } from '@libs/@core/constants/env'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

const axiosServices: AxiosInstance = axios.create({
  baseURL: domainDefault,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

axios.interceptors.request.use(
  (response) => {
    response.headers['Accept-Language'] =
      localStorage.getItem('language') || 'en'
    return response
  },
  (error: unknown) => Promise.reject(error)
)

// interceptor for http
axiosServices.interceptors.request.use(
  (response: InternalAxiosRequestConfig) => {
    response.headers['Accept-Language'] =
      localStorage.getItem('language') || 'en'

    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      response.headers['Authorization'] = `${accessToken}`
    }
    return response
  },
  (error: unknown) => Promise.reject(error)
)

axiosServices.interceptors.response.use(
  (response: AxiosResponse) => {
    response.headers['ngonngu'] = 'en'
    return response
  },
  (error: AxiosError) => {
    if (
      error.response &&
      error.response.config.headers['Authorization'] &&
      error.response.status === 401
    ) {
      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)

export default axiosServices
