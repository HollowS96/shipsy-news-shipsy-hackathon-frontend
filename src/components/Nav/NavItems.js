import React from "react";
import { Link } from "react-router-dom";

import { types } from "./_structure";

const NavItems = props => {
  const { type, label, link } = props;
  let subElement = null;
  switch (type) {
    case types.LINK:
      subElement = <Link to={link}>{label}</Link>;
      break;
    case types.DIVIDER:
      subElement = <div className="divider" />;
      break;
    default:
      break;
  }
  return <li className="app--navigation__links-label">{subElement}</li>;
};

export default NavItems;
