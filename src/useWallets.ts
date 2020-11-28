import React from "react";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

interface Wallet {
  name: string;
  id: number;
}

const useWallets = (): Wallet[] => {
  const [wallets, setWallets] = React.useState<Wallet[]>([])
  React.useEffect(() => {
    get(getEndpoint() + "/wallets").then(d => setWallets(d.items))
  }, [])
  return wallets
}

export default useWallets;
