import React, { useEffect, useReducer } from "react";
import Heading from "../Heading/Heading";
import "./MostDes.scss";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import LoadingClient from "../LoadingClient/LoadingClient";
import Place from "../Place/Place";

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
const MostDes = () => {
  const [{ loading, error, places }, dispatch] = useReducer(reducer, {
    places: [],
    loading: true,
    error: "",
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
    <div className="mostDes">
      <Container>
        <div className="mostDes__container">
          <Heading title="ĐIỂM ĐẾN NHIỀU NHẤT" />
          {loading ? (
            <LoadingClient />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="mostDes__list">
              {places.map(
                (place) =>
                  place.category === "Địa điểm tham quan" && (
                    <Place place={place} key={place._id} />
                  )
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MostDes;
