import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import LoadingClient from "../../../../components/LoadingClient/LoadingClient";

const SearchHotel = () => {
  window.scrollTo(0, 0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="searchHotel">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : (
        <div className="searchHotel__container">
          <Container>
            <div className="searchHotel__head">
              <Link to="/">Trang chủ</Link>
              <Link to="/khach-san">Khách sạn</Link>
              <p>Khách sạn 2 sao</p>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SearchHotel;
