import React from "react";
import "./index.scss";

import logo from "../../assets/images/logo.webp";
import { listData } from "./_structure";
import NavItems from "./NavItems";
import NavInput from "./NavInput";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const Nav = () => {
  const listItems = listData.map((entry, index) => (
    <NavItems key={index} {...entry} />
  ));

  return (
    <nav className="app--navigation">
      <div className="app--navigation__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="app--navigation__interaction">
        <ul className="app--navigation__links">
          {listItems}
          <Auth />
        </ul>
        <NavInput />
      </div>
    </nav>
  );
};

export default Nav;
