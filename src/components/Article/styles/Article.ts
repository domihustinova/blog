// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled from 'styled-components/macro'

import { DEVICES_MIN } from '../../../theme/consts'

export const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 10px;

  @media ${DEVICES_MIN.TABLET} {
    width: 760px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 24px;

  @media ${DEVICES_MIN.TABLET} {
    margin-top: 64px;
    text-align: left;
  }
`

export const Content = styled.div`
  width: 350px;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  color: #212529;

  @media ${DEVICES_MIN.TABLET} {
    text-align: left;
    width: 760px;
    font-size: 20px;
  }
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
  width: 350px;
  height: 350px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin-right: 24px;
  margin-bottom: 24px;

  @media ${DEVICES_MIN.TABLET} {
    width: 760px;
    height: 500px;
  }
`
