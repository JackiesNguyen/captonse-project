import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./Place.scss";

const Place = (props) => {
  const { place, hotel } = props;
  return (
    <>
      {hotel ? (
        <Link to={`/khach-san/${place.slug}`} className="place">
          <img src={place.images[0]} className="place__img" alt={place.name} />

          <div className="place__content">
            <h2 className="place__name">{place.name}</h2>
            <p className="place__address">
              <FaMapMarkerAlt /> {place.address}
            </p>
            <Rating
              numReviews={place.numReviews}
              rating={place.rating}
              setColor
            />
          </div>
        </Link>
      ) : (
        <Link to={`/dia-diem/${place.slug}`} className="place">
          <img src={place.image} className="place__img" alt={place.name} />

          <div className="place__content">
            <h2 className="place__name">{place.name}</h2>
            <p className="place__address">
              <FaMapMarkerAlt /> {place.address}
            </p>
            <Rating
              numReviews={place.numReviews}
              rating={place.rating}
              setColor
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default Place;
