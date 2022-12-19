import { Box } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import "./Search.scss";
import LoadingClient from "../../components/LoadingClient/LoadingClient";
import axios from "axios";
import Place from "../../components/Place/Place";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state };
    case "FETCH_SUCCESS":
      return { ...state, places: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Search = () => {
  const { query } = useParams();
  const [{ loading, error, places }, dispatch] = useReducer(reducer, {
    places: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `/api/places/search?keyword=${encodeURIComponent(query)}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [query]);
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
          ) : (
            <div className="searchPg__body">
              {places.places.length > 0 ? (
                <div className="searchPg__list">
                  {places.places.map((place) => (
                    <Place place={place} key={place._id} />
                  ))}
                </div>
              ) : (
                <p className="no-data">Không có điạ điểm cần tìm</p>
              )}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Search;
