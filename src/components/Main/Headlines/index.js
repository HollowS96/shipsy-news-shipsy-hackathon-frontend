import React, { useContext } from "react";
import "./index.scss";

import Article from "../Article";
import appContext from "../../../context/app-context";

const Headlines = () => {
  const { news } = useContext(appContext);
  const [a1, a2, a3] = news;
  const newsArticles = [a1, a2, a3];

  const articles = newsArticles.map((data, index) => (
    <Article data={data} key={index} />
  ));

  return (
    <div className="headlines">
      <h1>Headlines</h1>
      <div className="headlines__articles-wrapper">{articles}</div>
    </div>
  );
};

export default Headlines;
