import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useNavigate, useParams } from "react-router-dom";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import Rating from "../../../components/Rating/Rating";
import "./PlaceDetail.scss";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/Button";
import SuggestedPlace from "../../../components/SuggestedPlace/SuggestedPlace";
import OtherPalces from "../../../components/OtherPalces/OtherPlaces";

const reducer = (state, action) => {
  switch (action.type) {
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
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, place }, dispatch] = useReducer(reducer, {
    place: {},
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/places/${slug}`);
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
        <p>Bãi biển đẹp</p>;
        break;
      default:
        break;
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
                <a href="/" className="placeDetail__home">
                  Trang chủ
                </a>{" "}
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
                      <h3>Bình luận</h3>
                      <ul className="reviews__list">
                        <li className="reviews__item">
                          <h4 className="reviews__name">nguyenvanhai13</h4>
                          <Rating
                            rating={place.rating}
                            setColor
                            numReviews=""
                          ></Rating>
                          <p className="reviews__date">2022-12-02</p>
                          <p className="reviews__text">
                            Rất là đẹp mọi người ơi
                          </p>
                        </li>

                        <li className="reviews__item">
                          <h4 className="reviews__name">nguyenvanhai13</h4>
                          <Rating
                            rating={place.rating}
                            setColor
                            numReviews=""
                          ></Rating>
                          <p className="reviews__date">2022-12-02</p>
                          <p className="reviews__text">
                            Rất là đẹp mọi người ơi
                          </p>
                        </li>

                        <li className="reviews__item">
                          <h4 className="reviews__name">nguyenvanhai13</h4>
                          <Rating
                            rating={place.rating}
                            numReviews=""
                            setColor
                          ></Rating>
                          <p className="reviews__date">2022-12-02</p>
                          <p className="reviews__text">
                            Rất là đẹp mọi người ơi
                          </p>
                        </li>
                      </ul>

                      <h3 className="reviews__title"> Đánh giá địa điểm</h3>
                      <form>
                        <Form.Group className="mb-3" controlId="rating">
                          <Form.Label>Rating</Form.Label>
                          <Form.Select>
                            <option value="">Select...</option>
                            <option value="1">1- Poor</option>
                            <option value="2">2- Fair</option>
                            <option value="3">3- Good</option>
                            <option value="4">4- Very good</option>
                            <option value="5">5- Excelent</option>
                          </Form.Select>
                        </Form.Group>
                        <FloatingLabel
                          controlId="floatingTextarea"
                          label="Comments"
                          className="mb-3"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                          />
                        </FloatingLabel>

                        <div className="mb-3">
                          <Button type="submit">Submit</Button>
                        </div>
                      </form>
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
