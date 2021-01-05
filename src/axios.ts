import axios from 'axios'

const instance = axios.create()
const url = `${process.env.API_URL}/api/`
console.log(url)
const pathsNotAuthenticated = ['/signup']
instance.defaults.baseURL = url

instance.interceptors.request.use(
  (config) => {
    console.log(url)
    const token = localStorage.getItem('access_token')
    if (token) config.headers.authorization = `Bearer ${token}`

    if (config.method === 'post' && pathsNotAuthenticated.some((pathUrl) => pathUrl === config.url))
      delete config.headers.authorization

    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data)
)

export default instance
