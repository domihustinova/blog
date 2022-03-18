import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './theme/globalStyle'
import RoutesRedirect from './utils/config/routes'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesRedirect />
    </BrowserRouter>
  )
}

export default App
