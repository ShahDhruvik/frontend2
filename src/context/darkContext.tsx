import { ReactNode, createContext, useContext, useState } from 'react'
import { DarkContextType } from '@/types/context-types/dark.types'

const DarkContext = createContext<DarkContextType | undefined>(undefined)

export function DarkProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState<DarkContextType['dark']>(false)
  const contextValue: DarkContextType = {
    dark: dark as DarkContextType['dark'],
    setDark: setDark as DarkContextType['setDark'],
  }
  return <DarkContext.Provider value={contextValue}>{children}</DarkContext.Provider>
}

export function useDark() {
  const context = useContext(DarkContext)
  if (!context) {
    throw new Error('useLoading must be used within DarkProvider')
  }
  return context
}
