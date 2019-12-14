import React from "react";
import "./index.scss";

const Comments = ({ open, toggle }) => {
  const submitHandler = () => {
    alert("adding comment...");
  };

  return (
    <div className={`comments-modal ${open ? "show" : ""}`}>
      <div className="comments-modal__backdrop" onClick={toggle}></div>
      <div className="comments-modal__pannel">
        <div className="comments-header">
          <h2>Comments</h2>
          <i class="fas fa-times" onClick={toggle}></i>
        </div>
        <div className="comments-body">
          <form onSubmit={submitHandler}>
            <textarea>Hello</textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
