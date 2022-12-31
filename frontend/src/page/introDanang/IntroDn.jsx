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
  window.scrollTo(0, 0);
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
              <div
                style={{
                  backgroundColor: "#fff",
                  fontSize: "17px",
                  fontWeight: "500",
                  padding: "10px 40px",
                  lineHeight: 1.7,
                }}
              >
                <p>
                  {" "}
                  <strong>Đà Nẵng – Thành phố</strong> của những cây cầu được
                  biết đến là địa điểm du lịch hấp dẫn nhất nhì của Việt Nam.
                  Ngày càng có nhiều khách du lịch trong và ngoài nước chọn
                  thành phố xinh đẹp này làm điểm dừng chân, thư giãn và nghỉ
                  ngơi sau những bộn bề, lo toan của cuộc sống. Không chỉ đa
                  dạng về hình thức du lịch mà nền văn hóa nơi đây cũng rất
                  phong phú, đặc biệt là Văn hóa ẩm thực đậm chất miền Trung.
                </p>
                <p>
                  {" "}
                  Chính sự thu hút đặc biệt của mình, Đà Nẵng mỗi năm đón lượng
                  du khách thập phương đến tham quan lên đến con số hàng triệu
                  người. Nhưng không phải ai cũng lên kế hoạch chi tiết về những
                  điểm vui chơi cũng như thưởng thức những “đặc sản” du lịch nơi
                  đây một cách trọn vẹn, phù hợp với thời gian và tài chính.
                  Chính vì nhu cầu đó, travelCaps đã ra đời.
                </p>
                <p>
                  {" "}
                  <strong>TravelCaps</strong> cung cấp và giới thiệu đến bạn đọc
                  hơn hàng trăm địa điểm tham quan hấp dẫn bậc nhất Đà Thành. Từ
                  những quán cóc thân quen, cà phê đường phố, cho đến các điểm
                  ăn chơi thú vị, hàng quán với những tầm view cực đẹp.
                </p>
              </div>
              <Row>
                <Col sm={12}>
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
                            thành phố cảng có vị trí chiến lược
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
                            khoảng 25,6ºC, cao nhất là tháng 6
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
                            của một cửa ngõ giao lưu quốc tế.
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
              </Row>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default IntroDn;
