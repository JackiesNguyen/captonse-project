import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import LoadingClient from "../../../../components/LoadingClient/LoadingClient";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, tours: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const OtherTour = () => {
  const formatPrice = (num) => {
    const stringNum = num.toString();
    const format = stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return format;
  };
  const [{ loading, error, tours }, dispatch] = useReducer(reducer, {
    tours: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/tours");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingClient />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="tourDetail__other">
          <div className="tourDetail__other-head">
            <i className="fa-solid fa-car"></i>
            <h2>SẴN SÀNG ĐI DU LỊCH?</h2>
          </div>
          <ul className="tourDetail__other-list">
            {tours.map((tour, index) => (
              <li className="tourDetail__other-item" key={index}>
                <Link to={`tour-du-lich/${tour.slug}`}>
                  {tour.name} <p>{formatPrice(tour.price)} đ</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default OtherTour;
