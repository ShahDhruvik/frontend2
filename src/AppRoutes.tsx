// This maintains the routes of the App.
// It will be separated as the routes are more complexed.
// This has an example for nested routing and some normal routes
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/notFound'
import UnAuthorized from './components/unAuthorized'
// import Loader from './components/Loader'
// import { useLoading } from './context/LoadingContext'
import { AuthPaths, DefaultPaths, ErrorPaths } from '@/utils/route-path'
import DashRoute from './pages/app-pages/route'
import LoginPage from './pages/auth/login'
import ForgotPassword from './pages/auth/forgot-password'

type Props = {}

const AppRoutes = ({}: Props) => {
  //   const { loading } = useLoading()
  return (
    <>
      <Routes>
        <Route path={AuthPaths.LOGIN} element={<LoginPage />} />
        <Route path={AuthPaths.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={DefaultPaths.DASHBOARD} element={<DashRoute />} />
        <Route path={ErrorPaths.NOTFOUND} element={<NotFound />} />
        <Route path={ErrorPaths.UNAUTHORIZED} element={<UnAuthorized />} />
      </Routes>
      {/* <Loader loading={loading} /> */}
    </>
  )
}

export default AppRoutes
