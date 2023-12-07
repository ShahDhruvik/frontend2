import { Dispatch, SetStateAction } from 'react'
export type DarkContextType = {
    dark: boolean
    setDark: Dispatch<SetStateAction<boolean>>
}

