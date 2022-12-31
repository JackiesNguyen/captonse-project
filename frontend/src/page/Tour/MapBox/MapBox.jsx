import React from "react";
import Container from "react-bootstrap/esm/Container";
import Map from "react-map-gl";
import "./MapBox.scss";

const MapBox = () => {
  window.scrollTo(0, 0);
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
                  <div className="day">Day 1/1</div>
                  <div className="new-day">
                    <i
                      className="fa-solid fa-car"
                      style={{
                        border: "1px solid #000",
                        padding: "8px 10px",
                      }}
                    ></i>
                    <div className="boxGlo">
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
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      Địa điểm
                    </li>
                    <li>
                      <i className="fa-solid fa-hotel"></i>
                      Khách sạn
                    </li>
                  </ul>
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
