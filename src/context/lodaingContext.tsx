import { ContextMessage } from '@/utils/message'
import { LoadingContextType } from '@/types/context-types/loading.types'
import { ReactNode, createContext, useContext, useState } from 'react'

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<LoadingContextType['loading']>({
    isLoading: false,
  })
  const contextValue: LoadingContextType = {
    loading: loading as LoadingContextType['loading'],
    setLoading: setLoading as LoadingContextType['setLoading'],
  }
  return <LoadingContext.Provider value={contextValue}>{children}</LoadingContext.Provider>
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error(ContextMessage.LoadingMessage)
  }
  return context
}
