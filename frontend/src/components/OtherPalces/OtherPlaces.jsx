import { React, useEffect, useReducer } from "react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./OtherPlaces.scss";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import axios from "axios";

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

const OtherPalces = () => {
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
    <div className="otherPlace">
      <h2 className="otherPlace__title">Các địa điểm khác</h2>
      <div className="otherPlace__list">
        {places.slice(0, 12).map((place) => (
          <Card key={place._id}>
            <Link to={`/dia-diem/${place.slug}`} className="otherPlace__img">
              <img src={place.image} alt={place.name} />
              <h2>{place.name}</h2>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default OtherPalces;
