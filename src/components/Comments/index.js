import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";

import PreviousChat from "./PreviousChat";

const Comments = ({ open, toggle, articleId }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [noComments, setNoComments] = useState(false);

  useEffect(() => {
    if (open && !commentList.length && !noComments) {
      axios
        .get("https://shipodailyapi.shipsy.in/comments/getAll", {
          params: { articleId }
        })
        .then(({ data }) => {
          if (!data.length) setNoComments(true);
          else {
            setCommentList(data);
          }
        })
        .catch(err => console.error(err));
    } else {
      setComment("");
      setCommentList([]);
    }
  }, [open]);

  const submitHandler = e => {
    e.preventDefault();
    setIsSubmitting(true);
    axios
      .post("https://shipodailyapi.shipsy.in/comments/postComment", {
        articleId,
        text: comment,
        userId: null
      })
      .then(res => {
        setCommentList([
          {
            articleId,
            text: comment,
            userId: null,
            createdAt: "just now"
          },
          ...commentList
        ]);
        setComment("");
        setIsSubmitting(false);
        setNoComments(false);
      })
      .catch(err => {
        console.log(err);
        setIsSubmitting(false);
      });
  };

  const inputChangeHandler = e => {
    setComment(e.target.value);
  };

  const modalToggleHandler = () => {
    toggle();
    setNoComments(false);
  };

  return (
    <div className={`comments-modal ${open ? "show" : ""}`}>
      <div
        className="comments-modal__backdrop"
        onClick={modalToggleHandler}
      ></div>
      <div className="comments-modal__pannel">
        <div className="comments-header">
          <h2>Comments</h2>
          <i className="fas fa-times" onClick={modalToggleHandler}></i>
        </div>
        <div className="comments-body">
          <form onSubmit={submitHandler}>
            <textarea
              value={comment}
              onChange={inputChangeHandler}
              required
            ></textarea>
            <button disabled={isSubmitting}>Comment</button>
          </form>
          {noComments ? (
            <div className="no-comments-added">No comments yet!</div>
          ) : (
            <PreviousChat chat={commentList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
