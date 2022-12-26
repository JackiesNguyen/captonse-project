import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Container from "react-bootstrap/esm/Container";
import LoadingClient from "../../components/LoadingClient/LoadingClient";
import FeaturedHotel from "./components/FeaturedHotel/FeaturedHotel";
import FiveStar from "./components/Rating/FiveStar";
import FourStar from "./components/Rating/FourStar";
import ThreeStar from "./components/Rating/ThreeStar";
import TwoStar from "./components/Rating/TwoStar";
import "./Hotel.scss";

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

const Hotel = () => {
  window.scrollTo(0, 0);

  const [{ loading, error, hotels }, dispatch] = useReducer(reducer, {
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
  return (
    <div className="hotel">
      {loading ? (
        <LoadingClient />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="hotel__container">
          <Container>
            <FeaturedHotel hotels={hotels} />
            <div className="hotel__info">
              <h2>Khách sạn tại Đà Nẵng</h2>
              <span>
                Hơn 100 Khách sạn tại Đà Nẵng có Phòng Đẹp, Giá rẻ, nhiều ưu
                đãi, tiết kiệm 70% với những vị trí gần biển, gần trung tâm,
                sông hàn...chất lượng 1-5 sao
              </span>
              <ul>
                <li>Phòng đẹp, chất lượng dịch vụ tốt</li>
                <li>Bảo đảm giá tốt hơn trực tiếp tại khách sạn.</li>
                <li>Bảo đảm luôn có phòng, thanh toán an toàn và linh hoạt</li>
                <li>
                  Vị trí đẹp: Khách sạn ven biển, gần trung tâm, gần cầu rồng,
                  gần cầu sông hàn
                </li>
                <li>Chất lượng: khách sạn từ 1 đến 5 sao, resort</li>
              </ul>
            </div>
            <TwoStar hotels={hotels} />
            <ThreeStar hotels={hotels} />
            <FourStar hotels={hotels} />
            <FiveStar hotels={hotels} />
          </Container>
        </div>
      )}
    </div>
  );
};

export default Hotel;
