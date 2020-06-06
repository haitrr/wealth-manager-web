import {Link} from "react-router-dom";
import React from "react";

const Header = () => {
  return <div style={{display: 'flex'}}>
    <div style={{margin: "0 0.5rem"}}>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/stats">Stats</Link>
    </div>
  </div>
}

export default Header;