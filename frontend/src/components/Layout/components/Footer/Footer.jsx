import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Container from "react-bootstrap/esm/Container";
import "./Footer.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../../../../assets/images/himxozfd.png";

const Footer = () => {
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
                      Hotline: <strong>0123456789</strong>
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
                <h2 className="footer__head">Địa điểm mới nhất</h2>
              </div>
            </Col>
            <Col sm={4}>
              <div className="footer__right">
                <h2 className="footer__head">Mục xem nhiều</h2>
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
