import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import Place from "../../../components/Place/Place";
import "./TouristGlobal.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state };
    case "FETCH_SUCCESS":
      return { ...state, places: action.payload };
    case "FETCH_FAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const VisitLocation = (props) => {
  const { name, text } = props;
  const [{ error, places }, dispatch] = useReducer(reducer, {
    places: [],
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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="touristGlobal">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="touristGlobal__container">
          <Container>
            <div className="touristGlobal__head">
              <div className="touristGlobal__head-top">
                <a href="/">Trang chủ</a>
                {">>"}
                <p>Điểm du lịch</p>
                {">>"}
                <p>{name}</p>
              </div>
              <div className="touristGlobal__head-bot">
                <h2>{name}</h2>
              </div>
            </div>
            <div className="touristGlobal__body">
              <div className="touristGlobal__list">
                {places.map((place) =>
                  place.category === name ? (
                    <Place place={place} key={place._id} />
                  ) : null
                )}
              </div>
            </div>
            <div className="touristGlobal__bot">
              <p>{text}</p>
              <p style={{ marginTop: "10px" }}>
                Bạn đang không biết lựa chọn địa điểm nào cho cuộc hẹn sắp tới?
                Hãy để{" "}
                <a
                  href="/"
                  style={{
                    color: "#e61b23",
                    display: "inline-block",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  TravelCaps
                </a>{" "}
                đồng hành cùng bạn ở khắp mọi nơi trong thành phố nhé!
              </p>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default VisitLocation;
