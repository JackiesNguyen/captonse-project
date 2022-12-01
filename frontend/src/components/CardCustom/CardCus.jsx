import React from "react";
import "./CardCus.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CardCus = (props) => {
  const { image, title, quantity, desc, smallImg } = props;
  return (
    <div className="cardCus">
      <img
        src={image}
        className={smallImg && "smallImg"}
        alt="Hai chau"
        width="100%"
      />
      <div className="cardCus__content">
        <div className="cardCus__main">
          <h2>{title}</h2>
          <span>Có {quantity} địa điểm</span>
          <p>{desc}</p>
          <button className="cardCus__btn">
            Khám phá ngay <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCus;
