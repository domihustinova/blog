import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './theme/globalStyle'
import { AuthProvider } from './utils/context/context'
import RoutesRedirect from './utils/config/routes'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesRedirect />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
