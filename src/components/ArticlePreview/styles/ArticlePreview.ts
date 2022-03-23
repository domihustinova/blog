// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin: 0 auto;
  width: 860px;
  height: 244px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
`

export const PageTitle = styled.h1`
  text-align: left;
  margin-top: 64px;
  margin-bottom: 60px;
`

export const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 860px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h4`
  text-align: left;
  margin-bottom: 16px;
`

export const Content = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InfoWrapper = styled.div`
  margin-bottom: 16px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #6c757d;
  }
`

export const Author = styled.span`
  margin-right: 14px;
`

export const Date = styled.span``

export const Perex = styled.div`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  line-height: 24px;
  color: #212529;
`

export const ButtonLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #2b7efb;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus {
    outline: none;
    color: #274472;
  }
`

export const Image = styled.div`
  width: 272px;
  height: 244px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin-right: 24px;
`
