import React from "react";
import Rating from "../../../../components/Rating/Rating";
import "./GloMap.scss";

const HotelsMap = ({ hotels }) => {
  console.log(hotels);
  return (
    <div className="placeMap">
      <div className="placeMap__container">
        <div className="placeMap-head">
          <h2>Khách sạn</h2>
        </div>
        <div className="placeMap__body">
          <ul>
            {hotels.map((hotel) => (
              <li key={hotel._id}>
                <img src={hotel.images[0]} alt="" />
                <div className="content">
                  <div className="name">{hotel.name}</div>
                  <div className="title">{hotel.address}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Rating rating={hotel.rating} setColor />
                    <div className="add-to">Add to</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelsMap;
