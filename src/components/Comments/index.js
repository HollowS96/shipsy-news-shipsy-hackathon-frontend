import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";

const Comments = ({ open, toggle, articleId }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (open) {
      axios
        .get("https://shipodailyapi.shipsy.in/comments/getAll", {
          params: { articleId }
        })
        .then(({ data }) => {
          console.log(data);
        })
        .catch(err => console.error(err));
    } else {
      setComment("");
    }
  }, [open]);

  const submitHandler = () => {
    alert("adding comment...");
  };

  const inputChangeHandler = e => {
    setComment(e.target.value);
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
            <textarea value={comment} onChange={inputChangeHandler}></textarea>
            <button>Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
