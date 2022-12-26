import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Rating from "../../../../components/Rating/Rating";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, hotels: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HotelSame = ({ type, name }) => {
  const [{ hotels }, dispatch] = useReducer(reducer, {
    hotels: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/hotels");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  const formatPrice = (num) => {
    const stringNum = num.toString();
    const format = stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return format;
  };
  return (
    <>
      <div className="hotelDetail__same-head">
        <i className="fa-solid fa-bed"></i>
        <h2>Khách sạn cùng loại</h2>
      </div>
      <div className="hotelDetail__same-body">
        {hotels.map(
          (hotel) =>
            hotel.type === type &&
            hotel.name !== name && (
              <ul className="hotelDetail__same-list">
                <li className="hotelDetail__same-item">
                  <img
                    src={hotel.images[1]}
                    alt=""
                    className="hotelDetail__same-img"
                  />
                  <div className="hotelDetail__same-content">
                    <h3 className="hotelDetail__same-name">{hotel.name}</h3>
                    <Rating
                      numReviews={hotel.numReviews}
                      rating={hotel.rating}
                      setColor
                    />
                    <h3 className="hotelDetail__same-price">
                      Giá trung bình: <span>{formatPrice(hotel.price)}đ</span>
                    </h3>
                  </div>
                </li>
              </ul>
            )
        )}
      </div>
    </>
  );
};

export default HotelSame;
