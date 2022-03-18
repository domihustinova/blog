import type { ReactNode } from 'react'

import {
  ButtonLink,
  Container,
  Frame,
  Img,
  LoginWrapper,
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

interface LinkProps {
  to: Routes
  children: NavbarLinks
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

const NavbarButtonLink = ({ to, children }: LinkProps) => {
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

const NavbarImg = ({ alt, src }: ImgProps) => {
  return <Img alt={alt} src={src} />
}

Navbar.MenuItems = NavbarMenuItems
Navbar.RightItems = NavbarRightItems
Navbar.Login = NavbarLogin
Navbar.ButtonLink = NavbarButtonLink
Navbar.Img = NavbarImg

export default Navbar
