export const getAuthTokenCookie = () => {
  return document.cookie.split('ua_token=')[1]
}
