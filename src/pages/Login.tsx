import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthState, useAuthDispatch, loginUser } from '../utils/context'
import { Routes } from '../utils/types'
import Login from '../components/Login/Login'
import NavbarContainer from '../containers/Navbar'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { loading, errorMessage } = useAuthState()
  const dispatch = useAuthDispatch()
  const navigate = useNavigate()

  const handleLogin = async (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault()

    try {
      const response = await loginUser(dispatch, { username, password })
      if (!response?.data.access_token) return
      navigate(Routes.MyArticles)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavbarContainer />
      <Login>
        <Login.Title>Log In</Login.Title>
        {errorMessage && <Login.Error error={errorMessage.message} />}
        <Login.Form onSubmit={handleLogin} method="POST">
          <Login.Input
            id="username"
            name="Username"
            label="Username"
            type="text"
            value={username}
            placeholder="johnDoe"
            onChange={({ target }) => setUsername(target.value)}
            autoComplete="off"
            required
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
            required
          />
          <Login.SubmitButton type="submit">{loading ? 'Loading' : 'Log in'}</Login.SubmitButton>
        </Login.Form>
      </Login>
    </>
  )
}

export default LoginPage
