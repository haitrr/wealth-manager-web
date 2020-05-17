import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => <div>
  <h2>Home Page</h2>
  <Link to="/wallets">Wallets</Link>
  <br/>
  <Link to="transactions/add">Add Transaction</Link>
</div>
export default HomePage;
