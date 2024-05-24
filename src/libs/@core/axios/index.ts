import axios from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_ENV_VARIABLE

const axiosServices = axios.create({
  baseURL: BASE_URL
})

axios.interceptors.request.use(
  (response) => {
    response.headers['Accept-Language'] =
      localStorage.getItem('language') || 'en'
    return response
  },
  (error) =>
    Promise.reject((error.response && error.response.data) || 'Wrong Services')
)

// interceptor for http
axiosServices.interceptors.request.use(
  (response) => {
    response.headers['Accept-Language'] =
      localStorage.getItem('language') || 'en'

    const accessToken = localStorage.getItem('auth_token')

    if (accessToken) {
      response.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return response
  },
  (error) =>
    Promise.reject((error.response && error.response.data) || 'Wrong Services')
)

axiosServices.interceptors.response.use(
  (response) => {
    response.headers['ngonngu'] = 'en'
    return response
  },
  (error) => {
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
