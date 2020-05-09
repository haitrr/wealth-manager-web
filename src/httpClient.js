import {GetToken} from "./Jwt";
import history from "./history";

export function post(url, body) {
  const headers = {"Content-Type": "application/json"}
  const token = GetToken()
  if (token) {
    headers.Authorization = "bearer " + token
  }
  return fetch(url, {method: "POST", headers: headers, body: JSON.stringify(body)})
    .then(response => {
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

export function get(url, params) {
  const headers = {}
  const token = GetToken()
  if (token) {
    headers.Authorization = "bearer " + token
  }
  return fetch(url + buildQueryString(params), {method: "GET", headers: headers}).then(response => {
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

function buildQueryString(params) {
  if (!params) {
    return "";
  }
  const keys = Object.keys(params)
  if (keys.length === 0) {
    return ""
  }
  let query = "?"
  keys.forEach(key => {
    query += `${key}=${params[key]}&`
  })
  if (query[query.length - 1] === "&") {
    return query.substr(0, query.length - 1)
  }
  return query;
}
