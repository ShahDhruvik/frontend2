import { Dispatch, SetStateAction } from 'react'

export type LoadingProps = {
    isLoading: boolean
    loadingProps?: {
        page?: boolean
    }
}
export type LoadingContextType = {
    loading: LoadingProps
    setLoading: Dispatch<SetStateAction<LoadingProps>>
}
