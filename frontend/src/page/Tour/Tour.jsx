import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import LoadingClient from "../../components/LoadingClient/LoadingClient";
import ListTour from "./components/ListTour/ListTour";

import "./Tour.scss";

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

const Tour = () => {
  window.scrollTo(0, 0);

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
    <div className="tour">
      <Container>
        {loading ? (
          <LoadingClient />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="tour__container">
            <div className="tour__intro">
              <h2>Tour Du Lịch Đà Nẵng</h2>
              <p>
                <strong>Đà Nẵng</strong> nằm giữa ba di sản thế giới: cố đô Huế,
                phố cổ Hội An và thánh địa Mỹ Sơn. <strong>Tour Đà Nẵng</strong>{" "}
                mang đến cho du khách những trải nghiệm thú vị với các tour du
                lịch Đà Nẵng còn có nhiều danh thắng tuyệt đẹp say lòng du khách
                như Ngũ Hành Sơn, Bà Nà, Sơn Trà, đèo Hải Vân, sông Hàn thơ mộng
                và biển Mỹ Khê đẹp nhất hành tinh.
              </p>
              <p>
                <strong>Tour Đà Nẵng</strong> sẽ giúp du khách khám phá được
                thành phố biển xinh đẹp Đà Nẵng cùng các công trình kiến trúc
                đặc sắc và những danh thắng du lịch nổi tiếng nhất.
              </p>
              <p>
                <strong>Tour Đà Nẵng</strong> giá tốt với chi phí và chất lượng
                đảm bảo nhất, cùng Tour Du Lịch Đà Nẵng trải nghiệm thú vị các
                địa điểm Tour Du Lịch Đà Nẵng hấp dẫn nhất
              </p>
            </div>

            <div className="tour__box">
              <h2 className="tour__title">Hành trình đề xuất</h2>
              <Link to="#">
                <i
                  className="fa-solid fa-plus"
                  style={{ marginRight: "5px" }}
                ></i>
                Tạo hành trình
              </Link>
            </div>

            <ListTour tours={tours} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Tour;
