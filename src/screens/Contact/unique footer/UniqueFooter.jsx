import React from "react";

import MapImg from "./img/MapImage.png";
import garageImg from "./img/garage.png";

import { Container } from "react-bootstrap";

export const UniqueFooter = () => {
  return (
    <div>
      <Container>
        <img src={MapImg} alt="Map image" />
      </Container>
      <img style={{ width: "100%" }} src={garageImg} alt="" />
    </div>
  );
};
