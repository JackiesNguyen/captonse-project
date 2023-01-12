import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import Container from "react-bootstrap/esm/Container";
import "./Footer.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../../../../assets/images/himxozfd.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [newPlaces, setNewPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/places`);
        setNewPlaces(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [cates, setCates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/places/categories`);
        setCates(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const categories = newPlaces.reduce((acc, cur) => {
  //   acc[cur.category] = (acc[cur.category] || 0) + 1;
  //   return acc;
  // }, []);

  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <Row>
            <Col sm={4}>
              <div className="footer__left">
                <h2 className="footer__head">VỀ CHÚNG TÔI</h2>
                <div className="footer__logo">
                  <img src={Logo} alt="" />
                </div>
                <p>
                  <strong>TravelCaps</strong> là website chia sẻ thông tin hữu
                  ích về các địa điểm mới và nổi tiếng tại Đà Nẵng, cẩm nang du
                  lịch miễn phí tổng hợp từ nhiều nguồn khác nhau.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-phone-flip"></i>
                    <span>
                      Hotline: <strong>0867405503</strong>
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <strong>DUY TÂN University</strong>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <span>
                      Email: <strong>travelcaps@gmail.com</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={4}>
              <div className="footer__middle">
                <h2 className="footer__head">Địa điểm nổi bật</h2>
                <ul>
                  {newPlaces.map(
                    (newP, index) =>
                      newP.category === "Quán Ăn Chay" && (
                        <li key={index}>
                          <img src={newP.image} alt="" />
                          <Link to={`/dia-diem/${newP.slug}`}>{newP.name}</Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </Col>
            <Col sm={4}>
              <div className="footer__right">
                <h2 className="footer__head">Mục xem nhiều</h2>
                {/* <ul>
                  {cates.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
                </ul> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="footer__coppyright">
        Create by TravelCaps Team | 2022 All Right reserved.
      </div>
      <ScrollToTop
        className="border border-1 border-secondary"
        smooth
        style={{ background: "#fff", color: "white !important" }}
      />
    </footer>
  );
};

export default Footer;
