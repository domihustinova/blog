import type { ReactNode, HTMLInputTypeAttribute } from 'react'

import { Button, Container, Form, Input, InputWrapper, Label, Title } from './styles/Login'

interface Props {
  children: ReactNode
}

interface InputProps {
  id: string
  name: string
  label: string
  value: string
  type: HTMLInputTypeAttribute
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete: string
}

interface ButtonProps {
  children: ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Login = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const LoginTitle = ({ children }: Props) => {
  return <Title>{children}</Title>
}

const LoginForm = ({ children }: Props) => {
  return <Form>{children}</Form>
}

const LoginInput = ({
  id,
  name,
  label,
  value,
  type,
  placeholder,
  onChange,
  autoComplete,
}: InputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        required
      />
    </InputWrapper>
  )
}

const LoginSubmitButton = ({ onClick, children }: ButtonProps) => {
  return (
    <Button type="submit" onClick={onClick}>
      {children}
    </Button>
  )
}

Login.Form = LoginForm
Login.Input = LoginInput
Login.SubmitButton = LoginSubmitButton
Login.Title = LoginTitle

export default Login
