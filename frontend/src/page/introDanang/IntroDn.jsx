import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import LoadingClient from "../../components/LoadingClient/LoadingClient";
import WeatherImg from "../../assets/images/about__weather_img.jpg";
import overviewImg from "../../assets/images/about__overview__img.jpg";
import historyImg from "../../assets/images/about__history_img.jpg";

import "./IntroDn.scss";

const IntroDn = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="introDn">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : (
        <Container>
          <div className="introDn__container">
            <div className="introDn__head">
              <div className="introDn__head-top">
                <a href="/">Trang chủ</a>
                {">>"}
                <p>Giới thiệu</p>
              </div>
              <div className="introDn__head-bot">
                <h2>Về Đà Nẵng</h2>
              </div>
            </div>
            <div className="introDn__body">
              <Row>
                <Col sm={8}>
                  <div className="introDn__left">
                    <ul className="introDn__list">
                      <li className="introDn__item">
                        <div className="introDn__content">
                          <Link to="/gioi-thieu/tong-quan-da-nang">
                            Tổng quan Đà Nẵng
                          </Link>
                          <p className="date__post">10/12/2022</p>
                          <p className="introDn__desc">
                            Đà Nẵng là thành phố lớn thứ 4 ở Việt Nam sau Thành
                            phố Hồ Chí Minh, Hà Nội và Hải Phòng về đô thị hóa
                            và phát triển kinh tế - xã hội. Nằm trên bờ Biển
                            Đông có cửa sông Hàn, Đà Nẵng là một trong những
                            thành phố cảng có vị trí chiến lược…
                          </p>
                        </div>
                        <Link
                          to="/gioi-thieu/tong-quan-da-nang"
                          className="introDn__img"
                        >
                          <img src={overviewImg} alt="" />
                        </Link>
                      </li>

                      <li className="introDn__item">
                        <div className="introDn__content">
                          <Link to="/gioi-thieu/thoi-tiet-da-nang">
                            Thời tiết Đà Nẵng
                          </Link>
                          <p className="date__post">10/12/2022</p>
                          <p className="introDn__desc">
                            Thời tiết Đà Nẵng nằm trong vùng khí hậu nhiệt đới
                            gió mùa điển hình, nhiệt độ cao và ổn định. Đà Nẵng
                            nằm trong vùng khí hậu nhiệt đới gió mùa, nhiệt độ
                            cao và ít biến động. Nhiệt độ trung bình hàng năm
                            khoảng 25,6ºC, cao nhất là tháng 6…
                          </p>
                        </div>
                        <Link
                          to="/gioi-thieu/thoi-tiet-da-nang"
                          className="introDn__img"
                        >
                          <img src={WeatherImg} alt="" />
                        </Link>
                      </li>

                      <li className="introDn__item">
                        <div className="introDn__content">
                          <Link to="/gioi-thieu/lich-su-da-nang">
                            Lịch sử Đà Nẵng
                          </Link>
                          <p className="date__post">10/12/2022</p>
                          <p className="introDn__desc">
                            Trong lịch sử dân tộc, Đà Nẵng được biết đến không
                            chỉ là một thành phố cảng lớn nhất miền Trung Việt
                            Nam mà còn là một địa danh gắn liền với công cuộc mở
                            mang bờ cõi Đại Việt từ nhiều thế kỉ trước. Dấu vết
                            của một cửa ngõ giao lưu quốc tế…
                          </p>
                        </div>
                        <Link
                          to="/gioi-thieu/lich-su-da-nang"
                          className="introDn__img"
                        >
                          <img src={historyImg} alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="introDn__right">
                    <h2>Cập nhật các tin tức</h2>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default IntroDn;
