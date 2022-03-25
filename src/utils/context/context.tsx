import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'

import { AuthReducer, initialState } from './reducer'
import { AuthAction, AuthState } from '../types'

export const AuthStateContext = createContext<AuthState>(initialState)
export const AuthDispatchContext = createContext<Dispatch<AuthAction>>(() => null)

export function useAuthState() {
  const context = useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }
  return context
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}
