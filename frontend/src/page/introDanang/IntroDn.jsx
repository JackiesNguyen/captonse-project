import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const IntroDn = () => {
  return (
    <div className="introDn">
      <Container>
        <div className="introDn__container">
          <Row>
            <Col sm={8}>HAI</Col>
            <Col sm={4}>NGUYEN</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default IntroDn;
