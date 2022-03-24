import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { DEVICES_MAX, DEVICES_MIN } from '../../../theme/consts'

export const Container = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: #f8f9fa;
  border-radius: 4px;
`

export const Frame = styled.div`
  width: 100%;
  max-width: 1152px;
  display: flex;
  justify-content: space-between;
`

export const MenuItems = styled.div`
  display: flex;
  align-items: center;

  @media ${DEVICES_MIN.TABLET} {
    a {
      margin-left: 40px;
    }
  }
`

export const RightItems = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
  }

  @media ${DEVICES_MIN.TABLET} {
    a {
      margin-right: 40px;
    }
  }
`

export const ButtonLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #2b7efb;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus {
    outline: none;
    color: #274472;
  }

  @media ${DEVICES_MIN.TABLET} {
    font-size: 16px;
  }
`

export const LogoutButtonLink = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #2b7efb;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    outline: none;
    color: #274472;
  }

  @media ${DEVICES_MIN.TABLET} {
    font-size: 16px;
  }
`

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  @media ${DEVICES_MAX.TABLET} {
    display: none;
  }
`
