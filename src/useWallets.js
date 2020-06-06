import React from "react";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

const useWallets = () => {
  const [wallets, setWallets] = React.useState([])
  React.useEffect(() => {
    get(getEndpoint() + "/wallets").then(d => setWallets(d.items))
  }, [])
  return wallets
}

export default useWallets;
