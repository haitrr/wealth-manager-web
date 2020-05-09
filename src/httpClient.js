import {GetToken} from "./Jwt";
import history from "./history";

export function get(url) {
  const headers = {}
  const token = GetToken()
  if (token) {
    headers.Authorization = "bearer " + token
  }
  return fetch(url, {method: "GET", headers: headers}).then(response => {
    if (response.ok) {
      return response.json()
    } else if (response.status === 401) {
      history.push("/logout")
    } else {
      response.json().then(data => {
        throw data.message
      }).catch(e => {
        throw response.statusText
      })
    }
  }).catch(e => {
    throw e
  })
}
