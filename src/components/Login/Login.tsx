import type { ReactNode, InputHTMLAttributes, FormHTMLAttributes } from 'react'

import { Button, Container, Error, Form, Input, InputWrapper, Label, Title } from './styles/Login'

interface Props {
  children: ReactNode
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

interface ButtonProps {
  type: 'submit' | 'reset' | 'button'
  children: ReactNode
}

const Login = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const LoginTitle = ({ children }: Props) => {
  return <Title>{children}</Title>
}

const LoginForm = ({ onSubmit, children }: FormHTMLAttributes<HTMLFormElement>) => {
  return <Form onSubmit={onSubmit}>{children}</Form>
}

const LoginError = ({ error }: { error: string }) => {
  return <Error>{error}</Error>
}

const LoginInput = ({ id, label, ...restProps }: InputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...restProps} />
    </InputWrapper>
  )
}

const LoginSubmitButton = ({ children }: ButtonProps) => {
  return <Button type="submit">{children}</Button>
}
Login.Form = LoginForm
Login.Error = LoginError
Login.Input = LoginInput
Login.SubmitButton = LoginSubmitButton
Login.Title = LoginTitle

export default Login
