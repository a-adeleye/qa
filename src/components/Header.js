import React from "react";
import logo from "../logo.svg";

function Header() {
  
  return (
    <header>
      <img className="logo" src={logo} alt="" />
      <h2 className="current-page">Current Page</h2>
      <h4 className="project-title">logged in user</h4>
    </header>
  );
}

export default Header;
