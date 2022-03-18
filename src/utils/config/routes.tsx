import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'

import { Routes } from '../types'
import LoginPage from '../../pages/Login'
import RecentArticlesPage from '../../pages/RecentArticles'

const RoutesRedirect = () => {
  return (
    <ReactRouterRoutes>
      <Route path={Routes.Home} element={<RecentArticlesPage />} />
      <Route path={Routes.Login} element={<LoginPage />} />
    </ReactRouterRoutes>
  )
}

export default RoutesRedirect
