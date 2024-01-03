import { apiRequest } from "@/utils/axios-api-request"

export const insert = async (frmData: any) => {
    const res = await apiRequest("POST", '/post', frmData)
    console.log(res, 'response in insert')
}