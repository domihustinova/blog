// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h1`
  text-align: left;
  margin-top: 64px;
  margin-bottom: 24px;
`

export const Content = styled.div`
  width: 760px;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 170%;
  text-align: left;
  color: #212529;
`

export const InfoWrapper = styled.div`
  margin-bottom: 24px;

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

export const Image = styled.div`
  width: 760px;
  height: 500px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin-right: 24px;
  margin-bottom: 24px;
`
