import React from "react";
import Rating from "../../../../components/Rating/Rating";
import "./GloMap.scss";

const PlacesMap = ({ places }) => {
  return (
    <div className="placeMap">
      <div className="placeMap__container">
        <div className="placeMap-head">
          <h2>Địa điểm</h2>
        </div>
        <div className="placeMap__body">
          <ul>
            {places.map((place) => (
              <li key={place._id}>
                <img src={place.image} alt="" />
                <div className="content">
                  <div className="name">{place.name}</div>
                  <div className="title">{place.title}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Rating rating={place.rating} setColor />
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

export default PlacesMap;
