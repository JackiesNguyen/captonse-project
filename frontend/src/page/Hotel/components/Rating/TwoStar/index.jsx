import React from "react";
import CardHotel from "../../CardHotel/CardHotel";

const TwoStar = (props) => {
  const { hotels } = props;
  return (
    <div className="twoStar">
      <div className="twoStar__container">
        <div className="twoStar__title">Khách sạn 2 sao tại Đà Nẵng</div>
        <div className="twoStar__list">
          {hotels.map(
            (hotel) =>
              hotel.type === 2 && (
                <div className="twoStar__item" key={hotel._id}>
                  <CardHotel hotel={hotel} address desc view />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoStar;
