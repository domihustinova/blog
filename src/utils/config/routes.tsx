import { Routes as ReactRouterRoutes, Route, Navigate, Outlet } from 'react-router-dom'

import { useAuthState } from '../context'
import { Routes } from '../types'
import LoginPage from '../../pages/Login'
import RecentArticlesPage from '../../pages/RecentArticles'
import MyArticlesPage from '../../pages/MyArticles'

const RoutesRedirect = () => {
  const { ua_token } = useAuthState()

  return (
    <ReactRouterRoutes>
      <Route path={Routes.Home} element={<RecentArticlesPage />} />
      <Route
        path={Routes.Login}
        element={ua_token ? <Navigate to={Routes.MyArticles} replace /> : <LoginPage />}
      />
      <Route
        path={Routes.MyArticles}
        element={
          <ProtectedRoute>
            <MyArticlesPage />
          </ProtectedRoute>
        }
      />
    </ReactRouterRoutes>
  )
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { ua_token } = useAuthState()

  if (!ua_token) {
    return <Navigate to={Routes.Login} replace />
  }

  return children ? children : <Outlet />
}

export default RoutesRedirect
