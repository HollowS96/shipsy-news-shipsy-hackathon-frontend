import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const NavInput = () => {
  const submitHandler = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <SearchIcon className="icon" />
    </form>
  );
};

export default NavInput;
