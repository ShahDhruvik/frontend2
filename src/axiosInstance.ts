import axios, { AxiosInstance, AxiosResponse, CancelTokenSource } from 'axios'
import { CONST_API_URL, VITE_APP_API_URL } from '@/utils/envVariables'
// Cancel Token
const _cancelTokenQueue = new Map<string, CancelTokenSource>()

// Instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: VITE_APP_API_URL || (CONST_API_URL as string),
  timeout: 5000,
  timeoutErrorMessage: 'Timeout! something went wrong',
})

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const { cancelToken } = config
    if (cancelToken) {
      const cancelTokenKey = cancelToken?.toString()
      // Cancel previous request and delete from queue
      if (_cancelTokenQueue.has(cancelTokenKey as string)) {
        const source = _cancelTokenQueue.get(cancelTokenKey as string)
        source?.cancel('Request canceled by user')
        _cancelTokenQueue.delete(cancelTokenKey as string)
      }
      // Add current request to the queue
      const source = axios.CancelToken.source()
      config.cancelToken = source.token
      _cancelTokenQueue.set(cancelTokenKey, source)
    }
    //--------Auth------
    // const accessToken = localStorage.getItem('accessToken')
    // const refreshToken = localStorage.getItem('refreshToken')
    // if (!accessToken || !refreshToken) {
    //   window.location.href = `${VITE_APP_FRONTEND_URL || CONST_FRONTEND_URL}`
    // } else {
    //   config.headers.Authorization = `Bearer ${accessToken}`
    //   config.headers['Refresh-Token'] = `Bearer ${refreshToken}`
    // }
    return config
  },
  (error: any) => Promise.reject(error),
)

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Canceling the token after the reponse
    const { cancelToken } = response.config
    if (cancelToken) {
      // delete request from queue
      const cancelTokenKey = cancelToken?.toString()
      _cancelTokenQueue.delete(cancelTokenKey as string)
    }
    //--------Auth-------
    //New AccessToken after refresh
    // if (response.headers.newtoken) {
    //   localStorage.setItem('accessToken', response.headers.newtoken)
    // }
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
