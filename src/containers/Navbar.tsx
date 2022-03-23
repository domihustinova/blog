import { useNavigate } from 'react-router-dom'

import { useAuthState, useAuthDispatch, logout } from '../utils/context'
import { Routes, NavbarLinks } from '../utils/types'
import Navbar from '../components/Navbar/Navbar'
import logo from '../images/logo.svg'

const NavbarContainer = () => {
  const navigate = useNavigate()
  const dispatch = useAuthDispatch()
  const { ua_token } = useAuthState()

  const handleLogout = () => {
    logout(dispatch)
    navigate(Routes.Login)
  }

  return (
    <Navbar>
      <Navbar.MenuItems>
        <Navbar.Img alt="logo" src={logo} />
        <Navbar.ButtonLink to={Routes.Home}>{NavbarLinks.Recent}</Navbar.ButtonLink>
      </Navbar.MenuItems>
      {ua_token ? (
        <Navbar.RightItems>
          <Navbar.ButtonLink to={Routes.MyArticles}>{NavbarLinks.MyArticles}</Navbar.ButtonLink>
          <Navbar.ButtonLink to={Routes.CreateArticle}>
            {NavbarLinks.CreateArticle}
          </Navbar.ButtonLink>
          <Navbar.Logout onClick={handleLogout} />
        </Navbar.RightItems>
      ) : (
        <Navbar.Login />
      )}
    </Navbar>
  )
}

export default NavbarContainer
