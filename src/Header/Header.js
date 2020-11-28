import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  return <div style={{display: 'flex'}}>
    <NavLink to="/" label="Home"/>
    <NavLink to="/stats" label="Stats"/>
    <NavLink to="/budgets" label="Budgets"/>
    <NavLink to="/categories" label="Categories"/>
  </div>
}

export default Header;