import React, { useState } from "react";
import "./index.scss";

import Divider from "../../utils/Divider/Divider";
import Headlines from "./Headlines";
import LatestNews from "./LatestNews";
import PopularNews from "./PopularNews";
import Comments from "../Comments";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [articleId, setArticleId] = useState(null);

  const toggleModal = id => {
    setShowModal(!showModal);
    setArticleId(articleId ? null : id);
  };

  return (
    <>
      <main className="app--main">
        <Headlines toggleComment={toggleModal} />
        <Divider />
        <div className="news-record">
          <LatestNews toggleComment={toggleModal} />
          <PopularNews toggleComment={toggleModal} />
        </div>
      </main>
      <Comments open={showModal} toggle={toggleModal} articleId={articleId} />
    </>
  );
};

export default Main;
