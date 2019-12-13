import React from "react";

import { types } from "./_structure";

const NavItems = props => {
  const { type, label } = props;
  let subElement = null;
  switch (type) {
    case types.LINK:
      subElement = <button>{label}</button>;
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
