import React from "react";
import CardHotel from "../../CardHotel/CardHotel";

const FourStar = (props) => {
  const { hotels } = props;
  return (
    <div className="fourStar">
      <div className="fourStar__container">
        <div className="fourStar__title" style={{ marginTop: "50px" }}>
          Khách sạn 4 sao tại Đà Nẵng
        </div>
        <div className="fourStar__list">
          {hotels.map(
            (hotel) =>
              hotel.type === 4 && (
                <div className="fourStar__item" key={hotel._id}>
                  <CardHotel hotel={hotel} address desc view />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FourStar;
