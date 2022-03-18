import { useState } from 'react'

import Login from '../components/Login/Login'
import NavbarContainer from '../containers/Navbar'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <NavbarContainer />
      <Login>
        <Login.Title>Log In</Login.Title>
        <Login.Form>
          <Login.Input
            id="email"
            name="Email"
            label="Email"
            type="email"
            value={email}
            placeholder="me@example.com"
            onChange={({ target }) => setEmail(target.value)}
            autoComplete="off"
          />
          <Login.Input
            id="password"
            name="Password"
            label="Password"
            type="password"
            value={password}
            placeholder="**********"
            onChange={({ target }) => setPassword(target.value)}
            autoComplete="off"
          />
          <Login.SubmitButton>Log In</Login.SubmitButton>
        </Login.Form>
      </Login>
    </>
  )
}

export default LoginPage
