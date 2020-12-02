import React from "react";
import NavLink from "./NavLink";
import useCurrentUser from "../useCurrentUser";

const Header = () => {
  const currentUser = useCurrentUser()
  return <div style={{display: 'flex', justifyContent: 'space-between', padding: "0.5rem"}}>
    <div style={{display: 'flex'}}>
    <NavLink to="/" label="Home"/>
    <NavLink to="/stats" label="Stats"/>
    <NavLink to="/budgets" label="Budgets"/>
    <NavLink to="/categories" label="Categories"/>
    </div>
    <div>
      <span>{currentUser.userName}</span>
    </div>
  </div>
}

export default Header;