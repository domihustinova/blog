import type { ReactNode } from 'react'

import {
  ButtonLink,
  Container,
  Frame,
  Img,
  LoginWrapper,
  LogoutButtonLink,
  MenuItems,
  RightItems,
} from './styles/Navbar'
import arrow from '../../images/arrow.svg'
import { Routes, NavbarLinks } from '../../utils/types'

interface Props {
  children: ReactNode
}

interface ImgProps {
  alt: string
  src: string
}

interface ButtonLinkProps {
  to: Routes
  children: NavbarLinks
}

interface LogoutButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Navbar = ({ children }: Props) => {
  return (
    <Container>
      <Frame>{children}</Frame>
    </Container>
  )
}

const NavbarRightItems = ({ children }: Props) => {
  return <RightItems>{children}</RightItems>
}

const NavbarMenuItems = ({ children }: Props) => {
  return <MenuItems>{children}</MenuItems>
}

const NavbarButtonLink = ({ to, children }: ButtonLinkProps) => {
  return <ButtonLink to={to}>{children}</ButtonLink>
}

const NavbarLogin = () => {
  return (
    <LoginWrapper>
      <ButtonLink role="link" to={Routes.Login} aria-label={NavbarLinks.LogIn}>
        {NavbarLinks.LogIn}
      </ButtonLink>
      <Img alt="login" src={arrow} />
    </LoginWrapper>
  )
}

const NavbarLogout = ({ onClick }: LogoutButtonProps) => {
  return (
    <LoginWrapper>
      <LogoutButtonLink type="button" onClick={onClick}>
        {NavbarLinks.LogOut}
      </LogoutButtonLink>
      <Img alt="login" src={arrow} />
    </LoginWrapper>
  )
}

const NavbarImg = ({ alt, src }: ImgProps) => {
  return <Img alt={alt} src={src} />
}

Navbar.MenuItems = NavbarMenuItems
Navbar.RightItems = NavbarRightItems
Navbar.Login = NavbarLogin
Navbar.Logout = NavbarLogout
Navbar.ButtonLink = NavbarButtonLink
Navbar.Img = NavbarImg

export default Navbar
