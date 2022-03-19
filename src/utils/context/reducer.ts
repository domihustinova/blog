import { AuthReducerActionTypes, AuthState, AuthAction } from '../types'
import { getAuthTokenCookie } from '../helpers'

export const initialState = {
  ua_token: getAuthTokenCookie() || null,
  loading: false,
  errorMessage: null,
}

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthReducerActionTypes.RequestLogin:
      return {
        ...initialState,
        loading: true,
      }
    case AuthReducerActionTypes.LoginSuccess:
      return {
        ...initialState,
        ua_token: action.ua_token,
        loading: false,
      }

    case AuthReducerActionTypes.LoginError:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      }
    case AuthReducerActionTypes.Logout:
      return {
        ...initialState,
        ua_token: null,
        loading: false,
        errorMessage: null,
      }
    default:
      return state
  }
}
