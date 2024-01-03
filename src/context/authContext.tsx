import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'
import { AuthParams, User } from '@/types/context-types/auth.types'
import { ContextMessage } from '@/utils/message'

interface AuthContextType {
  authParams: AuthParams | undefined
  addStorage: (
    accessToken: string,
    refreshToken: string,
    user: User,
    role?: string,
  ) => void | undefined
  clearStorage: () => void | undefined
  setAuthParams: Dispatch<SetStateAction<AuthParams | undefined>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authParams, setAuthParams] = useState<AuthParams | undefined>({
    isAuth:
      localStorage.getItem('accessToken') !== null &&
      localStorage.getItem('refreshToken') !== null &&
      localStorage.getItem('user') !== null,
    role: localStorage.getItem('role') as string,
  })

  const addStorage = (accessToken: string, refreshToken: string, user: User, role?: string) => {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    localStorage.setItem('user', JSON.stringify(user))
    setAuthParams({ isAuth: true, role: role ? role : 'Admin' })
  }

  const clearStorage = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setAuthParams(undefined)
  }
  return (
    <AuthContext.Provider value={{ authParams, addStorage, clearStorage, setAuthParams }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(ContextMessage.AuthMessage)
  }
  return context
}
