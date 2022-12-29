import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardTour = ({ tour }) => {
  const formatPrice = (num) => {
    const stringNum = num.toString();
    const format = stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return format;
  };
  return (
    <div className="tour__global-item" key={tour._id}>
      <div className="tour__global-link">
        <div className="tour__global-img">
          <img src={tour.images[0]} alt="" />
          <div className="tour__global-address">
            <i className="fa-solid fa-location-dot"></i> {tour.address}
          </div>
          <Link to={`/tour-du-lich/${tour.slug}`} className="view-detail">
            Xem chi tiết
          </Link>
        </div>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <div className="tour__global-time">
            <i
              className="fa-solid fa-calendar-days"
              style={{ marginRight: "5px" }}
            ></i>
            {tour.time}
          </div>
          <div className="tour__global-price">{formatPrice(tour.price)} đ</div>
        </Box>
        <div className="tour__global-content">
          <Link to={`/tour-du-lich/${tour.slug}`} className="tour__global-name">
            {tour.name}
          </Link>
          <div className="tour__global-route">
            <i className="fa-solid fa-location-dot"></i> <p>Lộ trình: </p>{" "}
            {tour.route}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
