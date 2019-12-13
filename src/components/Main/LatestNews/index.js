import React, { useContext } from "react";
import { RotateLoader } from "react-spinners";
import "./index.scss";

import appContext from "../../../context/app-context";
import Article from "../Article";
import { ReactComponent as SortIcon } from "../../../assets/icons/sort.svg";

const LatestNews = () => {
  const { news, fetchNews, isFetchingNews } = useContext(appContext);

  const articles = news.map((data, index) => {
    return <Article key={index} data={data} alignHorizontal />;
  });
  return (
    <div className="latest-news">
      <div className="latest-news__heading">
        <h3 className="latest-news__heading--title">Latest</h3>
        <div className="latest-news__heading--sort">
          <SortIcon />
          <span>Sort By</span>
        </div>
      </div>
      {articles}
      <button
        className="load-more"
        onClick={fetchNews}
        disabled={isFetchingNews}
      >
        <div>Load more...</div>
        <div>
          loading...
          {/* <RotateLoader size={2} height={10} /> */}
        </div>
      </button>
    </div>
  );
};

export default LatestNews;
