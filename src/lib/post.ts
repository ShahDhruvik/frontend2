import { apiRequest } from "@/middleware/axios-api-request"
import { LoadingContextType } from "@/types/context-types/loading.types"

export const insert = async (setLoading: LoadingContextType['setLoading'], frmData: any, loadingProps?: LoadingContextType['loading']['loadingProps'],) => {
    const res = await apiRequest(setLoading, "POST", '/post', frmData, loadingProps)
    console.log(res, 'response in insert')
}