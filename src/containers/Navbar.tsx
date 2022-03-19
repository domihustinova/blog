import { useNavigate } from 'react-router-dom'

import { useAuthState, useAuthDispatch, logout } from '../utils/context'
import { Routes } from '../utils/types'
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
      <Navbar.Img alt="logo" src={logo} />
      {ua_token ? <Navbar.Logout onClick={handleLogout} /> : <Navbar.Login />}
    </Navbar>
  )
}

export default NavbarContainer
