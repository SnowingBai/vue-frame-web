import VueCookies from 'vue-cookies'

export function getToken() {
  return VueCookies.get('access-token')
}

export function setToken(token) {
  return VueCookies.set('access-token', token)
}

export function removeToken() {
  return VueCookies.remove('access-token')
}

export function reLogin() {
  removeToken()
  // 用于登录后重定向为原来的地址
  const redirectUri = window.location.origin
  window.location.href = `${process.env.BASE_URL}?redirect_uri=${redirectUri}`
}
