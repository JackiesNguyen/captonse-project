import axios from "axios";
import React, { useEffect, useReducer, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import LoadingClient from "../../components/LoadingClient/LoadingClient";
import Rating from "../../components/Rating/Rating";
import "./PlaceDetail.scss";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/Button";
import SuggestedPlace from "../../components/SuggestedPlace/SuggestedPlace";
import OtherPalces from "../../components/OtherPalces/OtherPlaces";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_PLACE":
      return { ...state, place: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreateReview: true };
    case "CREATE_SUCCESS":
      return { ...state, loadingCreateReview: false };
    case "CREATE_FAIL":
      return { ...state, loadingCreateReview: false };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, place: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const PlaceDetail = () => {
  let reviewsRef = useRef();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, place, loadingCreateReview }, dispatch] = useReducer(
    reducer,
    {
      place: [],
      loading: true,
      error: "",
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/places/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  const navigate = useNavigate();

  const handleParams = (category) => {
    switch (category) {
      case "Địa điểm tham quan":
        navigate("/diem-du-lich/dia-diem-tham-quan");
        break;
      case "Bãi biển đẹp":
        navigate("/diem-du-lich/bai-bien-dep");
        break;
      case "Văn hoá tín ngưỡng bản địa":
        navigate("/diem-du-lich/van-hoa-tin-nguong-ban-dia");
        break;
      case "Địa điểm vui chơi hấp dẫn":
        navigate("/diem-du-lich/dia-diem-vui-choi-hap-dan");
        break;
      case "Check-in Đà Nẵng":
        navigate("/diem-du-lich/dia-diem-checkin-hap-dan");
        break;
      case "Quán Ăn Chay":
        navigate("/diem-du-lich/quan-an-chay");
        break;
      default:
        break;
    }
  };
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
        `/api/places/${place._id}/reviews`,
        { rating, comment, name: user.name },
        {
          headers: { Authorization: token },
        }
      );
      dispatch({
        type: "CREATE_SUCCESS",
      });
      toast.success("Review submitted successfully");
      place.reviews.unshift(data.review);
      place.numReviews = data.numReviews;
      place.rating = data.rating;
      dispatch({ type: "REFRESH_PRODUCT", payload: place });
      window.scrollTo({
        behavior: "smooth",
        top: reviewsRef.current.offsetTop,
      });
    } catch (error) {
      toast.error(error);
      dispatch({ type: "CREATE_FAIL" });
    }
  };
  return (
    <div className="placeDetail">
      <Container>
        {loading ? (
          <LoadingClient />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="placeDetail__container">
            <div className="placeDetail__head">
              <div className="placeDetail__head-top">
                <Link to="/" className="placeDetail__home">
                  Trang chủ
                </Link>{" "}
                {">>"}
                <span
                  className="placeDetail__params"
                  onClick={() => handleParams(place.category)}
                >
                  {place.category}
                </span>
                {">>"}
                <h4 className="placeDetail__name">{place.name}</h4>
              </div>
              <div className="placeDetail__head-bot">
                <h2 className="placeDetail__title">{place.title}</h2>
              </div>
            </div>
            <div className="placeDetail__body">
              <Row>
                <Col sm={7}>
                  <div className="placeDetail__body-left">
                    <p className="placeDetail__desc">{place.description}</p>
                    <figure>
                      <img
                        src={place.image}
                        alt={place.image}
                        className="placeDetail__img"
                      />
                      <figcaption
                        style={{
                          textAlign: "center",
                          fontSize: "15px",
                          marginTop: "5px",
                          fontStyle: "italic",
                        }}
                      >
                        {place.imageCaption}
                      </figcaption>
                    </figure>
                    {place.detailDescription.map((p, index) => (
                      <div key={index}>
                        <p>{p.desc ? p.desc : ""}</p>
                        {p.img ? (
                          <img
                            src={p.img}
                            className="placeDetail__img"
                            alt="img"
                          />
                        ) : null}
                        <p>{p.text}</p>
                      </div>
                    ))}
                  </div>
                </Col>

                <Col sm={5}>
                  <div className="placeDetail__body-right">
                    <div
                      style={{
                        background: "#fff",
                        marginBottom: "30px",
                        padding: "10px 10px 20px 10px",
                      }}
                    >
                      <div className="map">
                        <h2>Xem bản đồ</h2>
                        <iframe
                          src={place.mapUrl}
                          title={place.name}
                          style={{ width: "100%", height: "400px" }}
                        ></iframe>
                      </div>
                      <div className="divide"></div>
                      {place.category === "Quán Ăn Chay" ||
                      place.category === "Quán cafe" ? (
                        <>
                          {place.fromPrice !== null ||
                          place.toPrice !== null ? (
                            <p style={{ color: "#000", fontWeight: "500" }}>
                              <strong style={{ color: "#e61b23" }}>
                                Khoảng giá:
                              </strong>{" "}
                              {place.fromPrice}đ - {place.toPrice}đ
                            </p>
                          ) : null}
                        </>
                      ) : null}
                      <div className="placeDetail__rating">
                        <div>
                          <p>{place.rating}</p>
                          <Rating rating={place.rating} setColor />
                        </div>
                        <div>
                          <span className="quantity__reviews">
                            {place.numReviews}
                          </span>{" "}
                          Đánh giá
                        </div>
                      </div>

                      <div className="address">
                        <p>Địa chỉ: </p>
                        <span className="address">{place.address}</span>
                      </div>
                    </div>
                    <div className="placeDetail__reviews">
                      <h3 ref={reviewsRef}>Bình luận</h3>
                      {place.reviews.length === 0 ? (
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
                          {place.reviews.map((review, index) => (
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

                      <h3 className="reviews__title"> Đánh giá địa điểm</h3>
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
                          <Link to={`/signin?redirect=/dia-diem/${place.slug}`}>
                            đăng nhập
                          </Link>{" "}
                          để đánh giá địa điểm
                        </div>
                      )}
                    </div>
                    <SuggestedPlace
                      district={place.district}
                      name={place.name}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <OtherPalces />
              </Row>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PlaceDetail;
