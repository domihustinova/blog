import { Routes as ReactRouterRoutes, Route, Navigate, Outlet } from 'react-router-dom'

import { useAuthState } from '../context'
import { Routes } from '../types'
import LoginPage from '../../pages/Login'
import CreateArticlePage from '../../pages/CreateArticle'
import MyArticlesPage from '../../pages/MyArticles'
import RecentArticlesPage from '../../pages/RecentArticles'
import ArticlePage from '../../pages/Article'

const RoutesRedirect = () => {
  const { ua_token } = useAuthState()

  return (
    <ReactRouterRoutes>
      <Route path={Routes.Home} element={<RecentArticlesPage />} />
      <Route
        path={Routes.Login}
        element={ua_token ? <Navigate to={Routes.MyArticles} replace /> : <LoginPage />}
      />
      <Route path="/article/:articleId" element={<ArticlePage />} />
      <Route
        path={Routes.MyArticles}
        element={
          <ProtectedRoute>
            <MyArticlesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={Routes.CreateArticle}
        element={
          <ProtectedRoute>
            <CreateArticlePage />
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
