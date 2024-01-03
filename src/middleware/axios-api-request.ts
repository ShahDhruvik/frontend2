import axiosInstance from '@/axiosInstance'
import { AxiosError, AxiosRequestConfig, Method } from 'axios'
import { checkStatus, responseWrapper } from './responseWrapper'
import { LoadingContextType } from '@/types/context-types/loading.types'

export const apiRequest = async (
    setLoading: LoadingContextType['setLoading'],
    method: Method,
    url: AxiosRequestConfig['url'],
    data?: AxiosRequestConfig['data'],
    loadingProps?: LoadingContextType['loading']['loadingProps'],
) => {
    try {
        setLoading({ isLoading: true, loadingProps })
        const res = await axiosInstance({
            method: method,
            url: url,
            ...(data && { data: data }),
        })
        checkStatus(res.status)
        return res.data
    } catch (error: AxiosError | any) {
        responseWrapper(error)
    } finally {
        setLoading({ isLoading: false })
    }
}
