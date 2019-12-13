import React from "react";

const NavInput = () => {
  const submitHandler = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <button className="icon">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default NavInput;
