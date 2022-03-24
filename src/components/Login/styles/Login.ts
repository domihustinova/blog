import styled from 'styled-components/macro'

import { DEVICES_MAX } from '../../../theme/consts'

export const Container = styled.div`
  width: 368px;
  padding: 32px 32px 25px 32px;
  margin: 0 auto;
  margin-top: 64px;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.175);
  border-radius: 8px;

  @media ${DEVICES_MAX.TABLET} {
    box-shadow: none;
  }
`

export const Title = styled.h3`
  text-align: left;
  margin-bottom: 24px;
`

export const InputWrapper = styled.div`
  text-align: left;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  padding: 6px 12px;
  width: 304px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  transition: border 0.3s ease-in-out;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #323c46;
  }

  &::placeholder {
    color: #6c757d;
  }
`
export const Button = styled.button`
  padding: 6px 12px;
  margin-top: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background-color: #007bff;
  border: 2px solid #007bff;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border 0.3s ease-in-out;

  &:hover {
    background-color: #2b7efb;
  }

  &:focus {
    outline: none;
    border: 2px solid #274472;
  }
`

export const Form = styled.form`
  text-align: right;
`

export const Error = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #dc3545;
`
