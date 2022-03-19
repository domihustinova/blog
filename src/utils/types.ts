export enum Routes {
  Home = '/',
  Login = '/login',
  MyArticles = '/my-articles',
  NotFound = '*',
}

export enum NavbarLinks {
  Recent = 'Recent Articles',
  MyArticles = 'My Articles',
  Create = 'Create Article',
  LogIn = 'Log in',
  LogOut = 'Log out',
}

export enum AuthReducerActionTypes {
  RequestLogin = 'REQUEST_LOGIN',
  LoginSuccess = 'LOGIN_SUCCESS',
  LoginError = 'LOGIN_ERROR',
  Logout = 'LOGOUT',
}

export type AuthState = {
  ua_token: string | undefined | null
  loading: boolean
  errorMessage?: AuthLoginError | null
}

export type AuthLoginError = {
  code: string
  message: string
}

export type AuthAction = {
  type: AuthReducerActionTypes
  ua_token?: string
  error?: AuthLoginError
}

export type LoginPayload = {
  username: string
  password: string
}
