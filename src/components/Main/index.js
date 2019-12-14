import React, { useState } from "react";
import "./index.scss";

import Divider from "../../utils/Divider/Divider";
import Headlines from "./Headlines";
import LatestNews from "./LatestNews";
import PopularNews from "./PopularNews";
import Comments from "../Comments";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <main className="app--main">
        <Headlines />
        <Divider />
        <div className="news-record">
          <LatestNews />
          <PopularNews />
        </div>
      </main>
      <Comments open={showModal} toggle={toggleModal} />
    </>
  );
};

export default Main;
