import React from "react";
import * as moment from "moment";
import { HashLoader } from "react-spinners";

import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import bird from "../../assets/videos/bird.mov";

const PreviousChat = ({ chat }) => {
  if (!chat.length) {
    return (
      <div className="comment-loader">
        <HashLoader color="#3a9efb" size={40} />
      </div>
    );
  }

  const chatList = chat.map(data => {
    if (data.createdAt !== "just now") {
      data.createdAt = moment(data.createdAt).fromNow();
    }
    if (!data.userId) {
      data.username = "Anonymous";
    }
    return (
      <li key={data.id} className="comment-item">
        <div className="comment-item__header">
          <span className="comment-item__header--image"></span>
          <span className="comment-item__header--username">
            {data.username}
          </span>
          <span className="comment-item__header--published-since">
            {data.createdAt}
          </span>
          <LikeIcon className="comment-item__header--like-icon" />
        </div>
        <p className="comment-item__text">{data.text}</p>
        <span className="comment-item__reply-btn">Reply</span>
      </li>
    );
  });
  return <ul className="previous-comments">{chatList}</ul>;
};

export default PreviousChat;
