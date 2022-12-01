import React from "react";
import Container from "react-bootstrap/esm/Container";
import Heading from "../Heading/Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  haichau,
  thanhkhe,
  sontra,
  camle,
  lienchieu,
  nguhanhson,
} from "./index";
import CardCus from "../CardCustom/CardCus";
import "./TopDestination.scss";

const TopDestination = () => {
  return (
    <div className="topDes">
      <Container>
        <div className="topDes__container">
          <Heading
            title="ĐIỂM ĐẾN HÀNG ĐẦU"
            desc="Khám phá ngay các địa điểm, hoạt động du lịch và ăn uống cho hành trình du lịch của bạn"
          />

          <div className="topDes__content">
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={12}>
                    <CardCus
                      image={haichau}
                      title="Hải Châu"
                      quantity="6000"
                      desc="Là trung tâm thành phố sầm uất, quận Hải Châu đón bao bước chân đến khám phá"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <CardCus
                      image={camle}
                      title="Cẩm Lệ"
                      quantity="4432"
                      desc="Cẩm Lệ là khu dân cư đầy triển vọng, để lại ấn tượng lớn với người khám phá"
                      smallImg
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <CardCus
                      image={lienchieu}
                      title="Liên Chiểu"
                      quantity="5231"
                      desc="Vùng ngoại ô yên tĩnh Liên Chiểu nổi tiếng với Đèo Hải Vân..."
                      smallImg
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={6}>
                    <CardCus
                      image={thanhkhe}
                      title="Thanh Khê"
                      quantity="5231"
                      desc="Vùng ngoại ô yên tĩnh Liên Chiểu nổi tiếng với Đèo Hải Vân..."
                      smallImg
                    />
                  </Col>
                  <Col lg={6}>
                    <CardCus
                      image={sontra}
                      title="Sơn Trà"
                      quantity="5231"
                      desc="Sơn Trà nổi tiếng với rất nhiều bãi tắm đẹp..."
                      smallImg
                    />
                  </Col>
                  <Col lg={12}>
                    <CardCus
                      image={nguhanhson}
                      title="Ngũ Hành Sơn"
                      quantity="5231"
                      desc="Quận Ngũ Hành Sơn trù phú nổi tiếng với Bãi biển Mỹ Khê cát mịn màng, điểm lý tưởng để bơi lội và chơi..."
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopDestination;
