import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/authContext'
import { AuthPaths, ErrorPaths } from '@/utils/route-path'

const withAuth = (Component: React.ComponentType, allowedRoles?: string[]) => {
  return (props: any) => {
    const { authParams } = useAuth()
    const auth = () => {
      if (authParams === undefined || !authParams.isAuth) {
        return <Navigate to={`${AuthPaths.LOGIN}`} />
      } else if (allowedRoles && !allowedRoles.includes(authParams?.role)) {
        return <Navigate to={ErrorPaths.UNAUTHORIZED} />
      } else {
        return <Component {...props} />
      }
    }
    useEffect(() => {
      auth()
    }, [authParams])

    return auth()
  }
}

export default withAuth
