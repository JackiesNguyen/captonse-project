import React, { useEffect, useState } from "react";
import "./SearchBox.scss";
import { Box, Tab, Tabs } from "@mui/material";
import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDebounce } from "../../hook";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const SearchBox = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  // Places
  const [queryPlace, setQueryPlace] = useState("");
  const debouncedPlace = useDebounce(queryPlace, 500);
  const [searchResultPlaces, setSearchResultPlaces] = useState([]);
  useEffect(() => {
    const search = async () => {
      try {
        if (!debouncedPlace.trim()) {
          setSearchResultPlaces([]);
          return;
        }

        const res = await axios.get(
          `/api/places/search?keyword=${encodeURIComponent(debouncedPlace)}`
        );

        setSearchResultPlaces(res.data.places);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [debouncedPlace]);

  const handleSubmitSearchPlace = (e) => {
    e.preventDefault();
    if (queryPlace.trim()) {
      navigate(`/search/${queryPlace}`);
    } else {
      navigate("/");
    }
  };

  // Hotels
  const [searchResultHotels, setSearchResultHotels] = useState([]);
  const [queryHotel, setQueryHotel] = useState("");
  const debouncedHotel = useDebounce(queryHotel, 500);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //

  useEffect(() => {
    const search = async () => {
      try {
        if (!debouncedHotel.trim()) {
          setSearchResultHotels([]);
          return;
        }

        const res = await axios.get(
          `/api/hotels/search?keyword=${encodeURIComponent(debouncedHotel)}`
        );

        setSearchResultHotels(res.data.hotels);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [debouncedHotel]);

  const handleSubmitSearchHotel = (e) => {
    e.preventDefault();
    if (queryHotel.trim()) {
      navigate(`/hotel/search/${queryHotel}`);
    } else {
      navigate("/");
    }
  };

  //

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleSubmitSearchTour = (e) => {
    e.preventDefault();
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="search">
      <Container>
        <div className="search__container">
          <Box>
            <Box>
              <Box
                style={{ padding: "10px 20px", marginBottom: "10px" }}
                className="custom__hotel"
              >
                <h2 className="search__title">
                  Tìm kiếm địa điểm gần bạn nhất
                </h2>
                <p className="search__desc">
                  Nhanh chóng - Chính xác - Đánh giá khách quan nhất
                </p>
              </Box>
              <Tabs value={tabIndex} onChange={handleTabChange}>
                <Tab label="Địa điểm hấp dẫn" />
                <Tab label="Khách sạn" />
                <Tab label="Tour trải nghiệm" />
              </Tabs>
            </Box>
            <Box sx={{ padding: "20px 16px", background: "#fff" }}>
              {tabIndex === 0 && (
                <form onSubmit={handleSubmitSearchPlace}>
                  <div className="box__container">
                    <Box style={{ flex: 1 }}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#d02245",
                        }}
                      >
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ marginRight: "5px" }}
                        ></i>
                        Địa điểm
                      </label>
                      <TextField
                        id="search-bar"
                        className="text"
                        onChange={(e) => setQueryPlace(e.target.value)}
                        variant="standard"
                        placeholder="Nhập dịa điểm bạn muốn đến......"
                        size="small"
                        fullWidth
                      />
                    </Box>

                    <button type="submit" className="search__btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      Tìm kiếm
                    </button>
                  </div>

                  {searchResultPlaces.length > 0 && (
                    <div className="search__data">
                      <div className="data__list">
                        {searchResultPlaces.map((placeSearch) => (
                          <Link
                            to={`/dia-diem/${placeSearch.slug}`}
                            className="data__item"
                            key={placeSearch._id}
                          >
                            <img
                              src={placeSearch.image}
                              alt="img"
                              className="data__img"
                            />
                            <h5 className="data__name">{placeSearch.title}</h5>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </form>
              )}
              {tabIndex === 1 && (
                <form onSubmit={handleSubmitSearchHotel}>
                  <div className="box__container">
                    <Box style={{ display: "flex", flexDirection: "column" }}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#d02245",
                        }}
                      >
                        <i
                          style={{ marginRight: "5px" }}
                          className="fa-solid fa-hotel"
                        ></i>
                        Khách sạn
                      </label>
                      <TextField
                        id="search-bar"
                        className="text"
                        onChange={(e) => setQueryHotel(e.target.value)}
                        variant="standard"
                        placeholder="Tìm kiếm khách sạn..."
                        size="small"
                        style={{ fontSize: "14px" }}
                      />
                    </Box>
                    <Box
                      style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#d02245",
                        }}
                      >
                        <i
                          className="fa-solid fa-calendar-days"
                          style={{ marginRight: "5px" }}
                        ></i>
                        Nhận phòng - trả phòng
                      </label>
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        style={{
                          borderBottom: "1px solid #000",
                          padding: "1px 0 4px",
                          cursor: "pointer",
                          fontSize: "15px",
                          fontWeight: "600",
                          userSelect: "none",
                        }}
                      >{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                        date[0].endDate,
                        "dd/MM/yyyy"
                      )}  `}</span>

                      {openDate ? (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className="date"
                        />
                      ) : null}
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#d02245",
                        }}
                      >
                        <i
                          style={{ marginRight: "5px" }}
                          className="fa-solid fa-people-group"
                        ></i>
                        Số phòng
                      </label>
                      <span
                        onClick={() => setOpenOptions(!openOptions)}
                        style={{
                          borderBottom: "1px solid #000",
                          padding: "1px 0 4px",
                          cursor: "pointer",
                          fontSize: "15px",
                          fontWeight: "600",
                          userSelect: "none",
                        }}
                      >
                        {`${options.adult} người lớn ● ${options.children} trẻ em ● ${options.room} phòng`}
                      </span>
                      {openOptions ? (
                        <div className="options">
                          <div className="options__item">
                            <div className="options__text">Người lớn</div>
                            <div className="options__counter">
                              <button
                                disabled={options.adult <= 0}
                                className="options__counterButton"
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </button>
                              <span className="options__counterNumber">
                                {options.adult}
                              </span>
                              <button
                                className="options__counterButton"
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="options__item">
                            <div className="options__text">Trẻ em</div>
                            <div className="options__counter">
                              <button
                                disabled={options.children <= 0}
                                className="options__counterButton"
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </button>
                              <span className="options__counterNumber">
                                {options.children}
                              </span>
                              <button
                                className="options__counterButton"
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="options__item">
                            <div className="options__text">Số phòng</div>
                            <div className="options__counter">
                              <button
                                disabled={options.room <= 0}
                                className="options__counterButton"
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </button>
                              <span className="options__counterNumber">
                                {options.room}
                              </span>
                              <button
                                className="options__counterButton"
                                onClick={() => handleOption("room", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </Box>

                    <button type="submit" className="search__btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      Tìm kiếm
                    </button>
                  </div>
                  {searchResultHotels.length > 0 && (
                    <div className="search__data">
                      <div className="data__list">
                        {searchResultHotels.map((hotelSearch) => (
                          <Link
                            to={`/khach-san/${hotelSearch.slug}`}
                            className="data__item"
                            key={hotelSearch._id}
                          >
                            <img
                              src={hotelSearch.images[0]}
                              alt="img"
                              className="data__img"
                            />
                            <h5 className="data__name">{hotelSearch.name}</h5>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </form>
              )}
              {tabIndex === 2 && (
                <form onSubmit={handleSubmitSearchTour}>
                  <div className="box__container">
                    <Box style={{ flex: 1 }}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#d02245",
                        }}
                      >
                        <i
                          style={{ marginRight: "5px" }}
                          className="fa-brands fa-intercom"
                        ></i>
                        Tour trải nghiệm
                      </label>
                      <TextField
                        id="search-bar"
                        className="text"
                        // onChange={(e) => setQuery(e.target.value)}
                        variant="standard"
                        placeholder="Nhập tour muốn trải nghiệm..."
                        size="small"
                        fullWidth
                      />
                    </Box>

                    <button type="submit" className="search__btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      Tìm kiếm
                    </button>
                  </div>
                </form>
              )}
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default SearchBox;
