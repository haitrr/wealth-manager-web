import React from "react";
import {Link} from "react-router-dom";
import {AuthenticationContext} from "./App";
import {getEndpoint} from "./api";

const WalletsPage = () => {
  const [wallets, setWallets] = React.useState([])
  const [authentication] = React.useContext(AuthenticationContext)
  React.useEffect(() => {
    fetch(getEndpoint() + "/wallets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + authentication.token
      },
    }).then(response => {
      if (response.ok) {
        response.json().then(data => setWallets(data.items))
      } else {
        alert("Fail to load wallet")
      }
    }).catch(e => {
      alert(e.message)
    })
  }, [])
  return <div>
    <h1>Wallets</h1>
    <Link to="/wallets/create">Create</Link>
    {wallets.map(wallet => <div key={wallet.id}>
        <div>{wallet.name}</div>
        <div>{wallet.balance}</div>
        <Link to={`/wallets/${wallet.id}`}>Show</Link>
      </div>
    )}
  </div>
}

export default WalletsPage;
