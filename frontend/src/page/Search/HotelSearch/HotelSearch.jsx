import { Box } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import "../Search.scss";
import axios from "axios";
import Place from "../../../components/Place/Place";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state };
    case "FETCH_SUCCESS":
      return { ...state, hotels: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HotelSearch = () => {
  const { query } = useParams();
  const [{ loading, error, hotels }, dispatch] = useReducer(reducer, {
    hotels: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `/api/hotels/search?keyword=${encodeURIComponent(query)}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [query]);
  console.log(hotels);
  return (
    <div className="searchPg">
      <div className="searchPg__container">
        <Container>
          <div className="searchPg__head">
            <Box style={{ display: "flex", gap: "20px" }}>
              <a href="/">Trang chủ</a> {">>"}
              <p>Bạn đã tìm {query} </p>
            </Box>
            <h5>Kết quả tìm kiếm từ khóa :</h5>
            <h2>{query}</h2>
          </div>
          {loading ? (
            <LoadingClient loading={loading} />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="searchPg__body">
              {hotels.hotels.length > 0 ? (
                <div className="searchPg__list">
                  {hotels.hotels.map((place) => (
                    <Place place={place} key={place._id} hotel />
                  ))}
                </div>
              ) : (
                <p className="no-data">Không có khách sạn cần tìm</p>
              )}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default HotelSearch;
