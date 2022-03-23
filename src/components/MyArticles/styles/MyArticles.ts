import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin: 0 auto;
  width: 760px;
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 40px;
`

export const Title = styled.h1`
  margin-right: 32px;
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
