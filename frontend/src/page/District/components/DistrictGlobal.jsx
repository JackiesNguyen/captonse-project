import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/Container";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import Place from "../../../components/Place/Place";
import "./DistrictGlobal.scss";

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

const DistrictGlobal = (props) => {
  window.scrollTo(0, 0);
  const { district } = props;
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
    <div className="districtGlobal">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="districtGlobal__container">
          <Container>
            <div className="districtGlobal__head">
              <div className="districtGlobal__head-top">
                <a href="/">Trang chủ</a>
                {">>"}
                <p>{district}</p>
              </div>
              <div className="districtGlobal__head-bot">
                <h2>{district}</h2>
              </div>
            </div>
            <div className="districtGlobal__body">
              <div className="districtGlobal__list">
                <div className="districtGlobal__item">
                  <div className="districtGlobal__title">
                    <i className="fa-solid fa-location-dot"></i>
                    <h2>Địa điểm tham quan</h2>
                  </div>
                  <div className="districtGlobal__place-list">
                    {places.map((place) =>
                      place.district === district &&
                      place.category === "Địa điểm tham quan" ? (
                        <Place place={place} key={place._id} />
                      ) : null
                    )}
                  </div>
                </div>
                <div className="districtGlobal__item">
                  <div className="districtGlobal__title">
                    <i className="fa-solid fa-location-dot"></i>
                    <h2>Bãi biển đẹp</h2>
                  </div>
                  <div className="districtGlobal__place-list">
                    {places.map((place) =>
                      place.district === district &&
                      place.category === "Bãi biển đẹp" ? (
                        <Place place={place} key={place.id} />
                      ) : null
                    )}
                  </div>
                </div>
                <div className="districtGlobal__item">
                  <div className="districtGlobal__title">
                    <i className="fa-solid fa-location-dot"></i>
                    <h2>Văn hoá tín ngưỡng bản địa</h2>
                  </div>
                  <div className="districtGlobal__place-list">
                    {places.map((place) =>
                      place.district === district &&
                      place.category === "Văn hoá tín ngưỡng bản địa" ? (
                        <Place place={place} key={place.id} />
                      ) : null
                    )}
                  </div>
                </div>
                <div className="districtGlobal__item">
                  <div className="districtGlobal__title">
                    <i className="fa-solid fa-location-dot"></i>
                    <h2>Địa điểm vui chơi hấp dẫn</h2>
                  </div>
                  <div className="districtGlobal__place-list">
                    {places.map((place) =>
                      place.district === district &&
                      place.category === "Địa điểm vui chơi hấp dẫn" ? (
                        <Place place={place} key={place.id} />
                      ) : null
                    )}
                  </div>
                </div>
                <div className="districtGlobal__item">
                  <div className="districtGlobal__title">
                    <i className="fa-solid fa-location-dot"></i>
                    <h2>Địa điểm checkin hấp dẫn</h2>
                  </div>
                  <div className="districtGlobal__place-list">
                    {places.map((place) =>
                      place.district === district &&
                      place.category === "Check-in Đà Nẵng" ? (
                        <Place place={place} key={place.id} />
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default DistrictGlobal;
