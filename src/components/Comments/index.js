import React from "react";
import "./index.scss";

const Comments = () => {
  return (
    <div className="comments-modal">
      <div className="comments-modal__pannel">
        <div className="comments-modal__pannel--wrapper">
          <div className="comments-header">
            <h4>Comments</h4>
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
