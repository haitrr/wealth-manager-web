import React from "react";
import {Link} from "react-router-dom";

const WalletsPage = () => {
  return <div>
    <h1>Wallets</h1>
    <Link to="/wallets/create">Create</Link>
  </div>
}

export default WalletsPage;
