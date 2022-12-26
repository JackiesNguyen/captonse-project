import React from "react";
import CardHotel from "../../CardHotel/CardHotel";

const FiveStar = (props) => {
  const { hotels } = props;
  return (
    <div className="fiveStar">
      <div className="fiveStar__container">
        <div className="fiveStar__title" style={{ marginTop: "50px" }}>
          Khách sạn 5 sao tại Đà Nẵng
        </div>
        <div className="fiveStar__list">
          {hotels.map(
            (hotel) =>
              hotel.type === 5 && (
                <div className="fiveStar__item" key={hotel._id}>
                  <CardHotel hotel={hotel} address desc view />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default FiveStar;
