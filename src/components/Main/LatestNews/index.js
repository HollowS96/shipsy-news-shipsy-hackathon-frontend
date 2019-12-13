import React, { useContext } from "react";
import "./index.scss";

import appContext from "../../../context/app-context";
import Article from "../Article";

const LatestNews = () => {
  const { news } = useContext(appContext);

  const articles = news.map((data, index) => {
    return <Article key={index} data={data} alignHorizontal />;
  });
  return (
    <div className="latest-news">
      <h3 className="latest-news__title">Latest</h3>
      {articles}
    </div>
  );
};

export default LatestNews;
