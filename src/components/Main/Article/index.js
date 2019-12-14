import React from "react";
import axios from "axios";
import "./index.scss";

import { ReactComponent as Like } from "../../../assets/icons/like.svg";
import { ReactComponent as Comment } from "../../../assets/icons/comment.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import Placeholder from "./Placeholder";

const Article = ({ data, alignHorizontal }) => {
  const embedClass = alignHorizontal ? "horizontal" : "vertical";

  const {
    id,
    imageLink,
    title,
    description,
    articleLink,
    publishedTime
  } = data;

  const likeAndShareHandler = type => () => {
    hitDb(type);
    // shareNews(type);
  };

  const hitDb = type => {
    axios
      .post("http://shipodailyapi.shipsy.in/comments/updateLikesAndShare", {
        articleId: id,
        type
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  // const shareNews = type => {
  //   let link = "";
  //   if (type === "linkedin") {
  //     link = `https://www.linkedin.com/shareArticle?mini=true&url=${articleLink}`;
  //   } else if (type === "facebook") {
  //     link = `https://www.facebook.com/sharer/sharer.php?u=${articleLink}`;
  //   } else if (type === "twitter") {
  //     link = `https://twitter.com/share?url=${articleLink}`;
  //   }
  //   hitSocialPlatform(link);
  // };

  // const hitSocialPlatform = link => {
  //   axios
  //     .get(link)
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <article className={`news-article ${embedClass}`}>
      <div
        className="news-article--image"
        style={{
          backgroundImage: `url(${imageLink})`
        }}
      />
      <div className="news-article--description">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="news-article--description__interaction">
          <span className="published-since">{publishedTime}</span>
          <div className="actions">
            <Like
              className="action like"
              onClick={likeAndShareHandler("like")}
            />
            <Comment className="action comment" />
            <Linkedin
              className="action linkedin"
              onClick={likeAndShareHandler("linkedin")}
            />
            <Twitter
              className="action twitter"
              onClick={likeAndShareHandler("twitter")}
            />
            <div
              className="action fb-share-button"
              data-href={articleLink}
              data-layout="button_count"
              data-size="small"
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com%2F&amp;src=sdkpreparse"
                className="fb-xfbml-parse-ignore"
              >
                <Facebook
                  className="facebook"
                  onClick={likeAndShareHandler("facebook")}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
