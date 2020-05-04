const KEY = "jwt"

export function SaveToken(token) {
  localStorage.setItem(KEY, token)
}

export function GetToken() {
  return localStorage.getItem(KEY)
}
