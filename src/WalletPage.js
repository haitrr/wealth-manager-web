import React from "react";
import {useParams} from "react-router-dom";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

const WalletPage = () => {
  const {id} = useParams()
  const [wallet, setWallet] = React.useState(null)
  React.useEffect(() => {
    get(getEndpoint() + `/wallets/${id}`).then(data => setWallet(data)).catch(e => alert(e))
  }, [])
  if (!wallet) {
    return <h1>Loading</h1>
  }
  return <div>
    <div>{wallet.name}</div>
    <div>{wallet.balance}</div>
  </div>
}

export default WalletPage;
