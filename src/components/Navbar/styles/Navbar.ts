import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: #f8f9fa;
  border-radius: 4px;
`

export const Frame = styled.div`
  width: 1152px;
  display: flex;
  justify-content: space-between;
`

export const MenuItems = styled.div``

export const RightItems = styled.div``

export const ButtonLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2b7efb;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus {
    outline: none;
    color: #274472;
  }
`

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Img = styled.img``
