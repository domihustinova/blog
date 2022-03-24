import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { DEVICES_MIN } from '../../../theme/consts'

export const Container = styled.div`
  margin: 0 auto;
  width: 375px;
  display: flex;
  flex-direction: column;

  @media ${DEVICES_MIN.TABLET} {
    width: 760px;
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 40px;

  @media ${DEVICES_MIN.TABLET} {
    width: 760px;
    flex-direction: row;
  }
`

export const Title = styled.h1`
  margin-bottom: 16px;

  @media ${DEVICES_MIN.TABLET} {
    margin-right: 32px;
    margin-bottom: 0px;
  }
`

export const Button = styled(Link)`
  max-width: 154px;
  width: 100%;
  height: 36px;
  padding-top: 3px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background-color: #007bff;
  border: 2px solid #007bff;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #2b7efb;
  }

  &:focus {
    outline: none;
    border: 2px solid #274472;
  }
`
