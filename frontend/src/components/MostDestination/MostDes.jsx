import React from "react";
import Heading from "../Heading/Heading";
import "./MostDes.scss";
import data from "../../data";
import Container from "react-bootstrap/esm/Container";
import Rating from "../Rating/Rating";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MostDes = () => {
  return (
    <div className="mostDes">
      <Container>
        <div className="mostDes__container">
          <Heading title="ĐIỂM ĐẾN NHIỀU NHẤT" />
          <div className="mostDes__list">
            {data.places.map((place, index) => (
              <Link
                to={`/diem-den-nhieu-nhat/${place.slug}`}
                className="place"
                key={index}
              >
                <img
                  src={place.image}
                  className="place__img"
                  alt={place.name}
                />
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
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MostDes;
