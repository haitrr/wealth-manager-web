import {Link} from "react-router-dom";
import React from "react";

const NavLink = ({to, label}) => {
  return   <div style={{margin: "0 0.5rem"}}>
    <Link to={to}>{label}</Link>
  </div>
}
export default NavLink;