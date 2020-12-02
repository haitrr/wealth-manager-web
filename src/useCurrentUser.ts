import {GetToken} from "./Jwt";
import jwt_decode from "jwt-decode";

export interface User {
  userName: string;
}

const useCurrentUser = () : User | null => {
  const token = GetToken()
  if(!token) {
    return null
  }
  return jwt_decode(token)
}

export default useCurrentUser