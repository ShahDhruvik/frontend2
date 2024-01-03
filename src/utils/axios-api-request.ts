import axiosInstance from "@/axiosInstance"
import { AxiosError, AxiosRequestConfig, Method } from "axios"

export const responseWrapper = (error: AxiosError | any) => {
    if (error.response) {
        console.log(error, '--------Response Catch Error');
    } else if (error.request) {
        console.log(error.request, '--------Request Catch Error');
    } else {
        console.log(error.message, '--------Other Catch Error');
    }
}

export const apiRequest = async (method: Method, url: AxiosRequestConfig['url'], data?: AxiosRequestConfig['data']) => {
    try {
        const res = await axiosInstance({
            method: method,
            url: url,
            ...(data && { data: data })
        })
        return res.data
    } catch (error: AxiosError | any) {
        responseWrapper(error)
    } finally {
        console.log("final")
    }
}