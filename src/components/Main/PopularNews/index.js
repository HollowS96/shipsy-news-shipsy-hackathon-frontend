import React, { useContext } from "react";
import "./index.scss";

import appContext from "../../../context/app-context";
import { ReactComponent as Like } from "../../../assets/icons/like.svg";
import { ReactComponent as Comment } from "../../../assets/icons/comment.svg";

const PopularNews = ({ toggleComment }) => {
  const { popularNews, likeAndShareHandler } = useContext(appContext);

  const articles = popularNews.reduce((acc, article, index) => {
    const {
      id,
      title,
      description,
      imageLink,
      articleLink,
      publishedTime
    } = article;
    if (imageLink.includes("/g.foolcdn.com/")) return acc;
    return acc.concat(
      <article key={index} className="popular-news__article">
        <div
          className="popular-news__article-image"
          style={{
            backgroundImage: `url(${imageLink})`
          }}
        />
        <div className="popular-news__article-description">
          <h4>{title}</h4>
          <div className="popular-news__article-description__interaction">
            <span className="published-since">{publishedTime}</span>
            <div className="actions">
              <Like
                className="like"
                onClick={likeAndShareHandler("like", id)}
              />
              <Comment className="comment" onClick={toggleComment} />
            </div>
          </div>
        </div>
      </article>
    );
  }, []);

  return (
    <div className="popular-news">
      <h3>Popular</h3>
      {articles}
    </div>
  );
};

export default PopularNews;
