import React from "react";
import "./index.scss";

const Article = ({ data, alignHorizontal }) => {
  const embedClass = alignHorizontal ? "horizontal" : "vertical";
  if (!data) return null;

  const { imageLink, title, description, articleLink, publishedTime } = data;
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
        </div>
      </div>
    </article>
  );
};

export default Article;
