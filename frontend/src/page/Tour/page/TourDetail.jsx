import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

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
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import Rating from "../../../components/Rating/Rating";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import "./TourDetail.scss";
//

const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_tour":
      return { ...state, tour: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreateReview: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreateReview: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreateReview: false };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, tour: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const TourDetail = () => {
  let reviewsRef = useRef();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, tour, loadingCreateReview }, dispatch] = useReducer(
    reducer,
    {
      tour: [],
      loading: true,
      error: "",
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/tours/slug/${slug}`);
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
        `/api/tours/${tour._id}/reviews`,
        { rating, comment, name: user.name },
        {
          headers: { Authorization: token },
        }
      );
      dispatch({
        type: "CREATE_SUCCESS",
      });
      toast.success("Review submitted successfully");
      tour.reviews.unshift(data.review);
      tour.numReviews = data.numReviews;
      tour.rating = data.rating;
      dispatch({ type: "REFRESH_PRODUCT", payload: tour });
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
  function replaceWithBr(text) {
    return text.replace(/\n/g, "<br />");
  }

  return (
    <div className="tourDetail">
      <Container>
        {loading ? (
          <LoadingClient />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="tourDetail__container">
            <div className="tourDetail__head">
              <Link to="/">Trang chủ</Link>
              {">>"}
              <Link to="/tour-du-lich">Tour du lịch Đà Nẵng</Link>
              {">>"}
              <p>{tour.name}</p>
            </div>
            <div className="tourDetail__body">
              <div className="tourDetail__name">
                <h2>{tour.name}</h2>
                <p className="tourDetail__price">
                  Giá tour: <span>{formatPrice(tour.price)} đ</span>
                </p>
                <p>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ marginRight: "10px" }}
                  ></i>
                  {tour.address}
                </p>
              </div>
              <Box style={{ display: "flex", gap: "40px", padding: "10px 0" }}>
                <div className="tourDetail__left">
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
                    {tour.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={image} key={index} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/*  */}

                  <div className="tourDetail__title">
                    <span>Bao gồm</span>
                    <p>Giá {formatPrice(tour.price)} đ</p>
                  </div>
                  <ul className="tourDetail__service-list">
                    <li className="tourDetail__service-item">
                      <span>Dịch vụ bao gồm: </span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: replaceWithBr(tour.serviceIncludes),
                        }}
                      />
                    </li>
                    <li className="tourDetail__service-item">
                      <span>Dịch vụ không bao gồm: </span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: replaceWithBr(tour.serviceNotIncludes),
                        }}
                      />
                    </li>
                    <li className="tourDetail__service-item">
                      <span>Chính sách trẻ em:</span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: replaceWithBr(tour.childrenPolicy),
                        }}
                      />
                    </li>
                  </ul>
                  <div className="tourDetail__title">
                    <span>Chi tiết</span>
                    <p>Chương trình tour</p>
                  </div>
                  <div className="tourDetail__content">
                    <div className="tourDetail__content-head">{tour.title}</div>
                    <p
                      className="tourDetail__desc"
                      dangerouslySetInnerHTML={{
                        __html: replaceWithBr(tour.description),
                      }}
                    />
                    <div className="tourDetail__schedule">
                      <h3>Lịch trình tour: </h3>
                      <div className="tourDetail__schedule-list">
                        {tour.tourSchedule.map((sh, index) => (
                          <div
                            key={index}
                            className="tourDetail__schedule-item"
                          >
                            <div className="tourDetail__schedule-day">
                              {`NGÀY ${sh.day}: ${sh.title} `}
                            </div>
                            <div className="tourDetail__schedule-details">
                              {sh.details.map((detail, index) => (
                                <div
                                  className="tourDetail__schedule-detail"
                                  key={index}
                                >
                                  <h5>{`${detail.timeSchedule} ${
                                    detail.timeSchedule ? ":" : ""
                                  }`}</h5>
                                  <p>{detail.desc}</p>
                                  <div className="tourDetail__schedule-images">
                                    {detail.img.map((image, index) => (
                                      <img
                                        src={image}
                                        key={index}
                                        alt=""
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                          marginBottom: "10px",
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="tourDetail__right">
                  <div className="tourDetail__reviews">
                    <div className="tourDetail__reviews-head">
                      <i className="fa-solid fa-comment"></i>

                      <h2>Đánh giá khách sạn</h2>
                    </div>
                    <div className="tourDetail__reviews-body">
                      <h2 ref={reviewsRef}>Bình luận</h2>
                      {tour.reviews.length === 0 ? (
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
                          {tour.reviews.map((review, index) => (
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
                          <Link to={`/signin?redirect=/dia-diem/${tour.slug}`}>
                            đăng nhập
                          </Link>{" "}
                          để đánh giá khách sạn
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="tourDetail__contact">
                    <div className="tourDetail__contact-head">
                      <i className="fa-solid fa-phone"></i>
                      <h2>LIÊN HỆ</h2>
                    </div>
                    <div className="tourDetail__contact-content">
                      <h2>{tour.name}</h2>
                      <p>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ marginRight: "10px" }}
                        ></i>
                        {tour.address}
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-phone"
                          style={{ marginRight: "10px" }}
                        ></i>
                        One Đà Nẵng tư vấn:{" "}
                        <span style={{ color: "#e61b23" }}>{tour.hotline}</span>
                      </p>
                    </div>
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

export default TourDetail;
