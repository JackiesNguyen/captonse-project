import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Banner from "../components/Banner";
import WeatherImg from "../../../assets/images/about__weather_img.jpg";
import LoadingClient from "../../../components/LoadingClient/LoadingClient";
import thoitietdanang1 from "../../../assets/images/thoi-tiet-da-nang-1.jpg";
import thoitietdanang11 from "../../../assets/images/thoi-tiet-da-nang-1-1.jpg";
import thoitietdanangthang3 from "../../../assets/images/thoi-tiet-da-nang-thang-3-thang-12.jpg";
import thoitietdanangthang4 from "../../../assets/images/thoi-tiet-da-nang-thang-4-thang-9-du-lich-danang-01.jpg";
import thoitietthang9 from "../../../assets/images/thoi-tiet-da-nang-thang-9-den-thang-12-du-lich-danang.jpg";

import "./Weather.scss";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="weather">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : (
        <>
          <Banner bannerImg={WeatherImg} />
          <Container>
            <div className="weather__container">
              <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                  <p style={{ fontStyle: "italic", fontWeight: "600" }}>
                    Thời tiết Đà Nẵng nằm trong vùng khí hậu nhiệt đới gió mùa
                    điển hình, nhiệt độ cao và ổn định.
                  </p>
                  <p>
                    Đà Nẵng nằm trong vùng khí hậu nhiệt đới gió mùa, nhiệt độ
                    cao và ít biến động. Nhiệt độ trung bình hàng năm khoảng
                    25,6ºC, cao nhất là tháng 6 (29,2ºC), thấp nhất là tháng 2
                    (21,2ºC). Riêng vùng rừng núi Bà Nà ở độ cao gần 1.500m có
                    nhiệt độ trung bình từ 17ºC đến 20ºC. Độ ẩm không khí trung
                    bình hàng năm là 83,4%. Lượng mưa trung bình hàng năm là
                    1.355mm, cao nhất là tháng 10 với 266mm, thấp nhất là tháng
                    2 với 7mm.
                  </p>
                  <p>
                    <strong>Thời tiết Đà Nẵng</strong> là nơi chuyển tiếp đan
                    xen giữa khí hậu miền Bắc và miền Nam, với tính trội là khí
                    hậu nhiệt đới ở phía Nam. Mỗi năm có 2 mùa rõ rệt: mùa khô
                    từ tháng 1 đến tháng 7 và mùa mưa kéo dài từ tháng 8 đến
                    tháng 12, thỉnh thoảng có những đợt rét mùa đông nhưng không
                    đậm và không kéo dài.
                  </p>
                  <figure>
                    <img src={thoitietdanang1} alt={thoitietdanang1} />
                    <figcaption>
                      Nhiệt độ không khí trung bình các tháng (ºC)
                    </figcaption>
                  </figure>
                  <figure>
                    <img src={thoitietdanang11} alt={thoitietdanang11} />
                    <figcaption>Lượng mưa trung bình các tháng (mm)</figcaption>
                  </figure>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontWeight: "600",
                      marginTop: "50px",
                    }}
                  >
                    Một số gợi ý khi đi du lịch Đà Nẵng các tháng trong năm:
                  </p>
                  <figure>
                    <img
                      src={thoitietdanangthang3}
                      alt={thoitietdanangthang3}
                    />
                  </figure>
                  <p>
                    Cuối tháng 12 – cuối tháng 3: Thời tiết Đà Nẵng các tháng
                    này mát mẻ và dễ chịu, thi thoảng còn có cơn mưa xuân. Đây
                    là thời điểm lý tưởng nhất để du xuân cho gia đình, các đặp
                    đôi và bạn bè. Thời điểm này giá các dịch vụ thuê khách sạn,
                    ăn uống được cho là bình ổn nhất năm. Trang phục khi đi
                    tháng này thường đồ vintage, váy, quần dài không quá dày.
                    Lưu ý nên mang thêm áo khoác tránh buổi tối sẽ se se lạnh.
                  </p>
                  <p>
                    Các sự kiện thường niên diễn ra trong thời gian này có thể
                    kể đến như: Bắn pháo hoa chào năm mới dịp tết nguyên đán,
                    đường hoa 2 bên bờ sông Hàn và các tuyến phố của Đà Nẵng, Lễ
                    hội hoa tulip tại Sun World Bà Nà Hills, Lễ hội chào năm mới
                    tại Asia Park Công Viên Châu Á, Lễ vía Thần Tài đầu năm tại
                    Khu du lịch núi Thần Tài, Lễ hội Quán Thế Âm – Ngũ Hành Sơn…
                  </p>
                  <figure>
                    <img
                      src={thoitietdanangthang4}
                      alt={thoitietdanangthang4}
                    />
                  </figure>
                  <p>
                    Đầu tháng 4 – giữa tháng 9: Với nhiệt độ trung bình từ
                    28-30°C (thường ít mưa và bão) nên thời tiết rất đẹp, thích
                    hợp cho những chuyến du lịch biển, nghỉ dưỡng hoàn hảo. Đây
                    được xem là thời gian cao điểm của du lịch Đà Nẵng.
                  </p>
                  <p>
                    Ngoài ra, các sự kiện”đinh” và đặc sắc thường diễn ra trong
                    thời điểm này như: Lễ hội tuyệt vời Đà Nẵng với nhiều hoạt
                    động biển hấp dẫn, Lễ hội pháo hoa Quốc tế Đà Nẵng, Cuộc thi
                    Marathon Quốc tế Đà Nẵng…
                  </p>
                  <figure>
                    <img src={thoitietthang9} alt={thoitietthang9} />
                  </figure>
                  <p>
                    Giữa tháng 9 – cuối tháng 12: Đây là khoảng thời gian vừa
                    chấm dứt cái nắng nóng oi bức Đà Nẵng, sẽ thi thoảng lác đác
                    những cơn mưa rào. Việc xuất hiện các cơn mưa rào chỉ độ 1-2
                    tiếng lại tạnh sẽ không ảnh hưởng nhiều đến chuyến đi của
                    bạn. Thời điểm này sẽ có các đợt kích cầu nên vé máy bay,
                    dịch vụ lưu trú ăn uống rất hợp lý.
                  </p>
                  <p>
                    Các trải nghiệm khi đi du lịch Đà Nẵng trong thời điểm này
                    có thể kể đến: Khám phá kinh tế đêm Đà Nẵng, mua sắm, du
                    lịch Mice, trải nghiệm các khu du lịch sinh thái, các quán
                    cà phê đẹp tại Đà Nẵng.. hoặc các sự kiện như: Lễ hội
                    Halloween tại các khu điểm du lịch, Lễ hội Noel…
                  </p>
                </Col>
                <Col sm={2}></Col>
              </Row>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default Weather;
