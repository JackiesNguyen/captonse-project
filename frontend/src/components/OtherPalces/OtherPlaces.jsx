import { React, useEffect, useReducer } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./OtherPlaces.scss";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// import required modules
import { Pagination, Autoplay } from "swiper";
import axios from "axios";

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

const OtherPalces = () => {
  const [{ places }, dispatch] = useReducer(reducer, {
    places: [],
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
  return (
    <div className="otherPlace">
      <h2 className="otherPlace__title">Các địa điểm khác</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {places.map((place) => (
          <SwiperSlide key={place._id} className="py-4 px-0">
            <Card>
              <Link to={`/place/${place.slug}`} className="otherPlace__img">
                <img src={place.image} alt={place.name} />
              </Link>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default OtherPalces;
