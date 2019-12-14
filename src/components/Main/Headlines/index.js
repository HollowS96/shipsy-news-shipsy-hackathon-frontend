import React, { useContext } from "react";
import "./index.scss";

import Article from "../Article";
import appContext from "../../../context/app-context";
import Placeholder from "../Article/Placeholder";

const Headlines = () => {
  const { headlines } = useContext(appContext);

  const getHeadlines = headlines => {
    return headlines.map((data, index) => <Article data={data} key={index} />);
  };

  const getPlaceholder = () => {
    return (
      <>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </>
    );
  };

  const articles = headlines.length
    ? getHeadlines(headlines)
    : getPlaceholder();

  return (
    <div className="headlines">
      <h1>Headlines</h1>
      <div className="headlines__articles-wrapper">{articles}</div>
    </div>
  );
};

export default Headlines;
