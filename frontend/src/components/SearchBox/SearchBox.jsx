import React, { useEffect, useState } from "react";
import "./SearchBox.scss";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDebounce } from "../../hook";

const SearchBox = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const debounced = useDebounce(query, 500);

  const navigate = useNavigate();

  useEffect(() => {
    const search = async () => {
      try {
        if (!debounced.trim()) {
          setSearchResult([]);
          return;
        }

        const res = await axios.get(
          `/api/places/search?keyword=${encodeURIComponent(debounced)}`
        );

        setSearchResult(res.data.places);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [debounced]);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const handleSubmitSearchPlace = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="search">
      <Container>
        <div className="search__container">
          <Box>
            <Box>
              <h2 className="search__title">Tìm kiếm địa điểm gần bạn nhất</h2>
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
                    <TextField
                      id="search-bar"
                      className="text"
                      onChange={(e) => setQuery(e.target.value)}
                      label="Search"
                      variant="outlined"
                      placeholder="Tìm kiếm địa điểm của bạn..."
                      size="small"
                      fullWidth
                    />

                    <button type="submit" className="search__btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      Tìm địa điểm
                    </button>
                  </div>

                  {searchResult.length > 0 && (
                    <div className="search__data">
                      <div className="data__list">
                        {searchResult.map((placeSearch) => (
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
                <Box>
                  <Typography>The second tab</Typography>
                </Box>
              )}
              {tabIndex === 2 && (
                <Box>
                  <Typography>The third tab</Typography>
                </Box>
              )}
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default SearchBox;
