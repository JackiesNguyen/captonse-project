import React from "react";
import CardHotel from "../../CardHotel/CardHotel";

const ThreeStar = (props) => {
  const { hotels } = props;
  return (
    <div className="threeStar">
      <div className="threeStar__container">
        <div className="threeStar__title" style={{ marginTop: "50px" }}>
          Khách sạn 3 sao tại Đà Nẵng
        </div>
        <div className="threeStar__list">
          {hotels.map(
            (hotel) =>
              hotel.type === 3 && (
                <div className="threeStar__item" key={hotel._id}>
                  <CardHotel hotel={hotel} address desc view />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreeStar;
