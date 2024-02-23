import { apiRequest } from "@/middleware/axios-api-request"
import { LoadingContextType } from "@/types/context-types/loading.types"
import { UserEndpoints } from "@/utils/api-endpoints"

export const fetchUser = async (setLoading: LoadingContextType['setLoading'], loadingProps?: LoadingContextType['loading']['loadingProps']) => {
    const res = await apiRequest(setLoading, "POST", UserEndpoints.dropDown, loadingProps)
    if (res.success) {
        return res.data.records
    } else {
        return []
    }
}