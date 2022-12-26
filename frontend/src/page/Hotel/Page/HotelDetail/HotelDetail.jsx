import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import LoadingClient from "../../../../components/LoadingClient/LoadingClient";
import "./HotelDetail.scss";
import Box from "@mui/material/Box";
import Form from "react-bootstrap/Form";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import Rating from "../../../../components/Rating/Rating";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import HotelSame from "../../components/HotelSame/HotelSame";
//

const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_HOTEL":
      return { ...state, hotel: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreateReview: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreateReview: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreateReview: false };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, hotel: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HotelDetail = () => {
  let reviewsRef = useRef();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, hotel, loadingCreateReview }, dispatch] = useReducer(
    reducer,
    {
      hotel: [],
      loading: true,
      error: "",
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/hotels/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  const auth = useSelector((state) => state.auth);
  const { user, isLogged } = auth;
  const token = useSelector((state) => state.token);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error("Please enter comment and rating");
      return;
    }
    try {
      const { data } = await axios.post(
        `/api/hotels/${hotel._id}/reviews`,
        { rating, comment, name: user.name },
        {
          headers: { Authorization: token },
        }
      );
      dispatch({
        type: "CREATE_SUCCESS",
      });
      toast.success("Review submitted successfully");
      hotel.reviews.unshift(data.review);
      hotel.numReviews = data.numReviews;
      hotel.rating = data.rating;
      dispatch({ type: "REFRESH_PRODUCT", payload: hotel });
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
    } catch (error) {
      toast.error(error);
      dispatch({ type: "CREATE_FAIL" });
    }
  };

  const formatPrice = (num) => {
    const stringNum = num.toString();
    const format = stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return format;
  };

  return (
    <div className="hotelDetail">
      <Container>
        {loading ? (
          <LoadingClient />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="hotelDetail__container">
            <div className="hotelDetail__head">
              <Link to="/">Trang chủ</Link>
              {">>"}
              <Link to="/khach-san">Khách sạn Đà Nẵng</Link>
            </div>
            <div className="hotelDetail__body">
              <div className="hotelDetail__name">
                <h2>{hotel.name}</h2>
                <p className="hotelDetail__price">
                  Giá phòng trung bình:{" "}
                  <span>{formatPrice(hotel.price)} đ</span>
                </p>
                <p>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ marginRight: "10px" }}
                  ></i>
                  {hotel.address}
                </p>
              </div>
              <Box style={{ display: "flex", gap: "40px", padding: "10px 0" }}>
                <div className="hotelDetail__left">
                  <Swiper
                    pagination={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    navigation={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                  >
                    {hotel.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={image} key={index} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="hotelDetail__intro">
                    Giới thiệu về {hotel.name}
                  </div>
                  <p className="hotelDetail__desc">{hotel.description}</p>
                  <div className="hotelDetail__ggmap">Vị trí Google Map</div>
                  <iframe
                    src={hotel.mapUrl}
                    title={hotel.name}
                    style={{ width: "100%", height: "400px", padding: "20px" }}
                  ></iframe>
                </div>
                <div className="hotelDetail__right">
                  <div className="hotelDetail__reviews">
                    <div className="hotelDetail__reviews-head">
                      <i className="fa-solid fa-phone"></i>
                      <h2>Đánh giá khách sạn</h2>
                    </div>
                    <div className="hotelDetail__reviews-body">
                      <h2 ref={reviewsRef}>Bình luận</h2>
                      {hotel.reviews.length === 0 ? (
                        <p
                          style={{
                            color: "#e61b23",
                            padding: "20px 10px",
                            border: "1px solid #ccc",
                          }}
                        >
                          Không có bình luận đánh giá nào.
                        </p>
                      ) : (
                        <ul className="reviews__list">
                          {hotel.reviews.map((review, index) => (
                            <li className="reviews__item" key={index}>
                              <h4 className="reviews__name">{review.name}</h4>
                              <Rating
                                rating={review.rating}
                                setColor
                                numReviews=""
                              ></Rating>
                              <p className="reviews__date">
                                {review.createdAt.substring(0, 10)}
                              </p>
                              <p className="reviews__text">{review.comment}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                      <h2
                        style={{
                          paddingTop: "20px",
                          borderTop: "1px solid #e6e6e6",
                        }}
                      >
                        Đánh giá
                      </h2>
                      {isLogged ? (
                        <form onSubmit={submitHandler}>
                          <Form.Group className="mb-3" controlId="rating">
                            <Form.Select
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="">Lựa chọn...</option>
                              <option value="1">1- Không đẹp</option>
                              <option value="2">2- Bình thường</option>
                              <option value="3">3- Đẹp</option>
                              <option value="4">4- Rất đẹp</option>
                              <option value="5">5- Xuất sắc</option>
                            </Form.Select>
                          </Form.Group>
                          <FloatingLabel
                            controlId="floatingTextarea"
                            label="Bình luận"
                            className="mb-3"
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              style={{ minHeight: "115px" }}
                            />
                          </FloatingLabel>

                          <div className="mb-3">
                            <Button
                              disabled={loadingCreateReview}
                              type="submit"
                            >
                              Xác nhận
                            </Button>
                            {loadingCreateReview && <LoadingClient />}
                          </div>
                        </form>
                      ) : (
                        <div className="signInwithComment">
                          Vui lòng{" "}
                          <Link to={`/signin?redirect=/dia-diem/${hotel.slug}`}>
                            đăng nhập
                          </Link>{" "}
                          để đánh giá khách sạn
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hotelDetail__contact">
                    <div className="hotelDetail__contact-head">
                      <i className="fa-solid fa-phone"></i>
                      <h2>LIÊN HỆ</h2>
                    </div>
                    <div className="hotelDetail__contact-content">
                      <h2>{hotel.name}</h2>
                      <p>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ marginRight: "10px" }}
                        ></i>
                        {hotel.address}
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-phone"
                          style={{ marginRight: "10px" }}
                        ></i>
                        One Đà Nẵng tư vấn:{" "}
                        <span style={{ color: "#e61b23" }}>
                          {hotel.hotline}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="hotelDetail__same">
                    <HotelSame type={hotel.type} name={hotel.name} />
                  </div>
                </div>
              </Box>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HotelDetail;
