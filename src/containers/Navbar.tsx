import Navbar from '../components/Navbar/Navbar'
import logo from '../images/logo.svg'

const NavbarContainer = () => {
  return (
    <Navbar>
      <Navbar.Img alt="logo" src={logo} />
      <Navbar.Login />
    </Navbar>
  )
}

export default NavbarContainer
