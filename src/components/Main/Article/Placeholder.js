import React from "react";

const Placeholder = ({ alignHorizontal }) => {
  const embedClass = alignHorizontal ? "horizontal" : "vertical";

  return (
    <article className={`placeholder ${embedClass}`}>
      <div className="placeholder--image" />
      <div className="placeholder--description">
        <h4></h4>
        <p></p>
        <div className="placeholder--description__interaction">
          <span className="published-since"></span>
          <div className="actions">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Placeholder;
