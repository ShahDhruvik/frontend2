import { Dropdowns } from '@/utils/constants'
import { Dispatch, SetStateAction } from 'react'
import { DropdownOptions } from '../common.types'


export type LoadingProps = {
    isLoading: boolean
    loadingProps?: {
        page?: boolean
        dropdown?: DropdownOptions
    }
}
export type LoadingContextType = {
    loading: LoadingProps
    setLoading: Dispatch<SetStateAction<LoadingProps>>
}
