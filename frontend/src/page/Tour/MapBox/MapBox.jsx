import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Map from "react-map-gl";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import HotelsMap from "./components/HotelsMap";
import PlacesMap from "./components/PlacesMap";
import "./MapBox.scss";

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

const MapBox = () => {
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

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/hotels");
        setHotels(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const [addDay, setAddDay] = useState(1);

  const handleClickAddDay = (e) => {
    setAddDay(addDay + 1);
  };

  const [showPlaces, setShowPlaces] = useState(false);
  const [showHotels, setShowHotels] = useState(false);

  const handleClickPlaces = () => {
    setShowPlaces(true);
  };

  const handleClickClose = () => {
    setShowPlaces(false);
    setShowHotels(false);
  };

  const handleClickHotels = () => {
    setShowHotels(true);
  };
  return (
    <div className="mapbox">
      <Container>
        <div className="mapbox__container">
          <div className="mapbox__head">Chuyến đi của bạn</div>
          <div className="mapbox__content">
            <div className="mapbox__content-head">
              <p>TravelCaps</p>
              <button>
                <i
                  style={{ marginRight: "5px" }}
                  className="fa-solid fa-floppy-disk"
                ></i>
                Lưu hành trình
              </button>
            </div>
            <div className="mapbox__content-body">
              <div className="mapbox__sidebar">
                <div className="mapbox__sidebar-head">
                  <div className="day">1 / {addDay}</div>
                  <div className="new-day">
                    <i
                      className="fa-solid fa-car"
                      style={{
                        border: "1px solid #000",
                        padding: "8px 10px",
                      }}
                    ></i>
                    <div className="boxGlo" onClick={handleClickAddDay}>
                      <i className="fa-solid fa-plus"></i>
                      Thêm ngày
                    </div>
                  </div>
                </div>
                <div>
                  <div className="calendar">
                    <i className="fa-sharp fa-solid fa-calendar-days"></i>
                    <p>Ngày 1</p>
                  </div>
                </div>
                <div className="mapbox__sidebar-content"></div>
                <div className="mapbox__sidebar-bot">
                  <ul>
                    <li onClick={handleClickPlaces}>
                      <i className="fa-solid fa-location-dot"></i>
                      Địa điểm
                    </li>
                    <li onClick={handleClickHotels}>
                      <i className="fa-solid fa-hotel"></i>
                      Khách sạn
                    </li>
                  </ul>
                </div>

                <div
                  className={
                    !showPlaces
                      ? "mapbox__sidebar-places"
                      : "mapbox__sidebar-places active"
                  }
                >
                  <i
                    className="fa-sharp fa-solid fa-xmark"
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "10px",
                      fontSize: "23px",
                      cursor: "pointer",
                    }}
                    onClick={handleClickClose}
                  ></i>
                  {loading ? (
                    <LoadingClient />
                  ) : error ? (
                    <div>{error}</div>
                  ) : (
                    <PlacesMap places={places} setShow />
                  )}
                </div>

                <div
                  className={
                    !showHotels
                      ? "mapbox__sidebar-places"
                      : "mapbox__sidebar-places active"
                  }
                >
                  <i
                    className="fa-sharp fa-solid fa-xmark"
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "10px",
                      fontSize: "23px",
                      cursor: "pointer",
                    }}
                    onClick={handleClickClose}
                  ></i>
                  {loading ? (
                    <LoadingClient />
                  ) : error ? (
                    <div>{error}</div>
                  ) : (
                    <HotelsMap hotels={hotels} setShow />
                  )}
                </div>
              </div>
              <Map
                initialViewState={{
                  longitude: 108.160458,
                  latitude: 16.049496,
                  zoom: 14,
                }}
                mapStyle="mapbox://styles/nguyenvanhai13/clcaoxxex005q15qpbcwmzbzc"
                style={{
                  width: "100%",
                  height: "500px",
                  flex: 0.7,
                  overflow: "hidden",
                }}
                mapboxAccessToken="pk.eyJ1Ijoibmd1eWVudmFuaGFpMTMiLCJhIjoiY2xhNzE1Y2czMDJsdDN5cWI5dGt3OWlndSJ9.IkTl29qmR0iSEnEYsw8MKg"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MapBox;
