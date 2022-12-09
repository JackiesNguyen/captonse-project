import { React, useReducer, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./SuggestedPlace.scss";
import Rating from "../Rating/Rating";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, places: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const SuggestedPlace = ({ district, name }) => {
  const [{ places }, dispatch] = useReducer(reducer, {
    places: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/places");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="suggPlace">
      <h2 className="suggPlace__title">Các địa điểm khác ở quận {district}</h2>
      <ul className="suggPlace__list">
        {places.map((place) =>
          district === place.district && place.name !== name ? (
            <li className="suggPlace__item" key={place._id}>
              <Link
                className="suggPlace__link"
                to={`/diem-du-lich/dia-diem-tham-quan/${place.slug}`}
              >
                <img src={place.image} className="suggPlace__img" alt="Img" />
                <div className="suggPlace__content">
                  <h2 className="suggPlace__name">{place.name}</h2>
                  <p>{place.title}</p>
                  <Rating
                    numReviews={place.numReviews}
                    rating={place.rating}
                    setColor
                  />
                </div>
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default SuggestedPlace;
