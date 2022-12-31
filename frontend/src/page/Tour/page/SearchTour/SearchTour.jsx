import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Rating from "../../../../components/Rating/Rating";
import LoadingClient from "../../../../components/LoadingClient/LoadingClient";
import Container from "react-bootstrap/Container";
import CardTour from "../../components/CardTour/CardTour";
import "./SearchTour.scss";
import { Box } from "@mui/material";
import SearchBox from "../../../../components/SearchBox/SearchBox";
import caurong from "../../../../assets/images/caurong.jpg";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        tours: action.payload.tours,
        page: action.payload.page,
        pages: action.payload.pages,
        countTours: action.payload.countTours,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const prices = [
  {
    name: "đến 500,000VND",
    value: "0-500000",
  },
  {
    name: "500,000VND đến 1,000,000VND",
    value: "500000-1000000",
  },
  {
    name: "1,000,000VND đến 2,000,000VND",
    value: "1000000-2000000",
  },
  {
    name: "2,000,000VND trở lên",
    value: "2000000-10000000",
  },
];

export const ratings = [
  {
    name: "4stars & up",
    rating: 4,
  },

  {
    name: "3stars & up",
    rating: 3,
  },

  {
    name: "2stars & up",
    rating: 2,
  },

  {
    name: "1stars & up",
    rating: 1,
  },
];

export default function SearchTour() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const time = sp.get("time") || "all";
  const query = sp.get("query") || "all";
  const price = sp.get("price") || "all";
  const rating = sp.get("rating") || "all";
  const order = sp.get("order") || "newest";
  const page = sp.get("page") || 1;

  const [{ loading, error, tours, pages, countTours }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      error: "",
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/tours/search?page=${page}&query=${query}&time=${time}&price=${price}&rating=${rating}&order=${order}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: console.log(error),
        });
      }
    };
    fetchData();
  }, [time, error, order, page, price, query, rating]);

  const [times, setTimes] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/tours/times`);
        setTimes(data);
      } catch (err) {
        toast.error(err);
      }
    };
    fetchCategories();
  }, [dispatch]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    const filterTime = filter.time || time;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;
    return `/tour-du-lich/search?time=${filterTime}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };
  return (
    <div className="searchTour">
      <Box style={{ position: "relative", marginTop: "128px" }}>
        <img
          src={caurong}
          alt=""
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        <SearchBox />
      </Box>
      <Container>
        <div className="searchTour__container">
          <Row>
            <Col md={3}>
              <div className="searchTour__left">
                <h3>Thời gian</h3>
                <div>
                  <ul>
                    <li>
                      <Link
                        className={"all" === time ? "text-bold" : ""}
                        to={getFilterUrl({ time: "all" })}
                        style={{ color: "#000" }}
                      >
                        Tất cả
                      </Link>
                    </li>
                    {times.map((c) => (
                      <li key={c}>
                        <Link
                          className={c === time ? "text-bold" : ""}
                          to={getFilterUrl({ time: c })}
                          style={{ color: "#000" }}
                        >
                          {c}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Giá</h3>
                  <ul>
                    <li>
                      <Link
                        className={"all" === price ? "text-bold" : ""}
                        to={getFilterUrl({ price: "all" })}
                        style={{ color: "#000" }}
                      >
                        Tất cả
                      </Link>
                    </li>
                    {prices.map((p) => (
                      <li key={p.value}>
                        <Link
                          to={getFilterUrl({ price: p.value })}
                          className={p.value === price ? "text-bold" : ""}
                          style={{ color: "#000" }}
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Đánh giá sao</h3>
                  <ul>
                    {ratings.map((r) => (
                      <li key={r.name}>
                        <Link
                          to={getFilterUrl({ rating: r.rating })}
                          className={
                            `${r.rating}` === `${rating}` ? "text-bold" : ""
                          }
                        >
                          <Rating caption={" & up"} rating={r.rating}></Rating>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to={getFilterUrl({ rating: "all" })}
                        className={rating === "all" ? "text-bold" : ""}
                      >
                        <Rating caption={" & up"} rating={0}></Rating>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={9}>
              {loading ? (
                <LoadingClient />
              ) : error ? (
                <div>{error}</div>
              ) : (
                <>
                  <Row className="justify-content-between mb-3">
                    <Col md={6}>
                      <div>
                        {countTours === 0 ? "Không có" : countTours} kết quả
                        {query !== "all" && " : " + query}
                        {time !== "all" && " : " + time}
                        {price !== "all" && " : Giá " + price}
                        {rating !== "all" && " : Rating " + rating + " & up"}
                        {query !== "all" ||
                        time !== "all" ||
                        rating !== "all" ||
                        price !== "all" ? (
                          <Button
                            variant="light"
                            onClick={() => navigate("/search")}
                          >
                            <i className="fas fa-times-circle"></i>
                          </Button>
                        ) : null}
                      </div>
                    </Col>
                    <Col className="text-end">
                      Sắp xếp theo{" "}
                      <select
                        value={order}
                        onChange={(e) => {
                          navigate(getFilterUrl({ order: e.target.value }));
                        }}
                      >
                        {/* <option value="newest">Newest Arrivals</option> */}
                        <option value="lowest">Giá: Thấp đến cao</option>
                        <option value="highest">Giá: Cao đến thấp</option>
                        {/* <option value="toprated">Avg. Customer Reviews</option> */}
                      </select>
                    </Col>
                  </Row>
                  {tours.length === 0 && <div>Không có tour cần tìm</div>}

                  <Row>
                    {tours.map((tour) => (
                      <Col sm={6} lg={4} className="mb-3" key={tour._id}>
                        <CardTour tour={tour} />
                      </Col>
                    ))}
                  </Row>

                  <div>
                    {[...Array(pages).keys()].map((x) => (
                      <Link
                        key={x + 1}
                        className="mx-1"
                        to={getFilterUrl({ page: x + 1 })}
                      >
                        <Button
                          className={Number(page) === x + 1 ? "text-bold" : ""}
                          variant="light"
                        >
                          {x + 1}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
