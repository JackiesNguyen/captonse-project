import React from "react";
import "./Heading.scss";

const Heading = (props) => {
  const { title, desc } = props;
  return (
    <div className="heading">
      <div className="heading__container">
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default Heading;
