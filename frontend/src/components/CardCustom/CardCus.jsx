import React from "react";
import "./CardCus.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardCus = (props) => {
  const { image, title, quantity, desc, smallImg, navigateLink } = props;
  return (
    <div className="cardCus">
      <img
        src={image}
        className={smallImg && "smallImg"}
        alt="Hai chau"
        width="100%"
      />
      <div className="cardCus__content">
        <div className="cardCus__main hover-border">
          <h2>{title}</h2>
          <span>Có {quantity} địa điểm</span>
          <p>{desc}</p>
          <Link to={navigateLink} className="cardCus__btn">
            Khám phá ngay <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCus;
