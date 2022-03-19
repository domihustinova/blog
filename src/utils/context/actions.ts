import axios from 'axios'

import { AuthReducerActionTypes, LoginPayload } from '../types'

export async function loginUser(dispatch: any, loginPayload: LoginPayload) {
  const url = 'https://fullstack.exercise.applifting.cz/login'

  const config = {
    headers: {
      'X-API-KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  }

  try {
    dispatch({ type: AuthReducerActionTypes.RequestLogin })
    const response = await axios.post(url, loginPayload, config)
    dispatch({
      type: AuthReducerActionTypes.LoginSuccess,
      ua_token: response.data.access_token,
    })
    document.cookie = `ua_token=${response.data.access_token}; max-age=${response.data.expires_in}; path=/`
    return response
  } catch (error: any) {
    dispatch({ type: AuthReducerActionTypes.LoginError, error: error.response.data })
  }
}

export async function logout(dispatch: any) {
  dispatch({ type: AuthReducerActionTypes.Logout })
  document.cookie = 'ua_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
}
