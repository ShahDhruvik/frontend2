import { apiRequest } from "@/middleware/axios-api-request"
import { LoadingContextType } from "@/types/context-types/loading.types"

export const insert = async (setLoading: LoadingContextType['setLoading'], frmData: any, loadingProps?: LoadingContextType['loading']['loadingProps'],) => {
    const res = await apiRequest(setLoading, "POST", '/post', frmData, loadingProps)
    console.log(res, 'response in insert')
}
export const getDropdown = async (setLoading: LoadingContextType['setLoading'], loadingProps?: LoadingContextType['loading']['loadingProps'],) => {
    const res = await apiRequest(setLoading, "GET", '/users', undefined, loadingProps)
    if (res) {
        const usersDrp = res.map((x: any) => { return { _id: x.id, label: x.name } })
        return usersDrp
    } else {
        return []
    }
}