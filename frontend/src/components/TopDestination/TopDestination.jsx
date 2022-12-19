import React, { useEffect, useState } from "react";
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
import axios from "axios";

const TopDestination = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchPlaces = async () => {
      const { data } = await axios.get("/api/places");
      setPlaces(data);
    };
    fetchPlaces();
  }, []);
  const categories = places.reduce((acc, cur) => {
    acc[cur.district] = (acc[cur.district] || 0) + 1;
    return acc;
  }, {});

  let renameKeys = (keysMap, object) =>
    Object.keys(object).reduce(
      (acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: object[key] },
      }),
      {}
    );

  let result = renameKeys(
    {
      "Hải Châu": "haichau",
      "Thanh Khê": "thanhkhe",
      "Sơn Trà": "sontra",
      "Cẩm Lệ": "camle",
      "Liên Chiểu": "lienchieu",
      "Ngũ Hành Sơn": "nguhanhson",
    },
    categories
  );
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
                      quantity={result.haichau || 0}
                      desc="Là trung tâm thành phố sầm uất, quận Hải Châu đón bao bước chân đến khám phá"
                      navigateLink="/khu-vuc/hai-chau"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <CardCus
                      image={camle}
                      title="Cẩm Lệ"
                      quantity={result.camle || 0}
                      desc="Cẩm Lệ là khu dân cư đầy triển vọng, để lại ấn tượng lớn với người khám phá"
                      smallImg
                      navigateLink="/khu-vuc/cam-le"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <CardCus
                      image={lienchieu}
                      title="Liên Chiểu"
                      quantity={result.lienchieu || 0}
                      desc="Vùng ngoại ô yên tĩnh Liên Chiểu nổi tiếng với Đèo Hải Vân..."
                      smallImg
                      navigateLink="/khu-vuc/lien-chieu"
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
                      quantity={result.thanhkhe || 0}
                      desc="Vùng ngoại ô yên tĩnh Liên Chiểu nổi tiếng với Đèo Hải Vân..."
                      smallImg
                      navigateLink="/khu-vuc/thanh-khe"
                    />
                  </Col>
                  <Col lg={6}>
                    <CardCus
                      image={sontra}
                      title="Sơn Trà"
                      quantity={result.sontra || 0}
                      desc="Sơn Trà nổi tiếng với rất nhiều bãi tắm đẹp..."
                      smallImg
                      navigateLink="/khu-vuc/son-tra"
                    />
                  </Col>
                  <Col lg={12}>
                    <CardCus
                      image={nguhanhson}
                      title="Ngũ Hành Sơn"
                      quantity={result.nguhanhson || 0}
                      desc="Quận Ngũ Hành Sơn trù phú nổi tiếng với Bãi biển Mỹ Khê cát mịn màng, điểm lý tưởng để bơi lội và chơi..."
                      navigateLink="/khu-vuc/ngu-hanh-son"
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
