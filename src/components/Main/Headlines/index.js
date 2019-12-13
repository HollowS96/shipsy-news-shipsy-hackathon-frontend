import React, { useContext } from "react";
import "./index.scss";

import Article from "../Article";
import appContext from "../../../context/app-context";

const Headlines = () => {
  const { highlights } = useContext(appContext);
  const [h1, h2, h3] = highlights;

  // const headlineArticles = [h1, h2, h3].map(news => {
  //   const { description } = news;

  //   // const

  //   return news;
  // });

  const articles = [h1, h2, h3].map((data, index) => (
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
