import { Outlet, Route } from 'react-router-dom'
import RouteWrapper from '../../middleware/routeWrapper'
import DashBoardLayout from './container/dashLayout'
import MainPage from './container/dashPage'
import withAuth from '@/middleware/auth.middleware'

interface Props {}

const DashboardRoute = ({}: Props) => {
  return (
    <RouteWrapper>
      <Route
        element={
          <DashBoardLayout>
            <Outlet />
          </DashBoardLayout>
        }
      >
        <Route index element={<MainPage />} />
      </Route>
    </RouteWrapper>
  )
}

export default withAuth(DashboardRoute)
