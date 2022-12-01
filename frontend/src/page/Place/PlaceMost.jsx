import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

const PlaceMost = () => {
  const param = useParams();
  const { slug } = param;
  return (
    <div>
      <Container>
        <h2>{slug}</h2>
      </Container>
    </div>
  );
};

export default PlaceMost;
