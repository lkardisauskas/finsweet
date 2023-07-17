import React from "react";
import { AllStyledH3 } from "../../../features/mainStyles.style";
import { Container } from "react-bootstrap";

import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import logo5 from "./img/logo5.png";

export const Brands = () => {
  return (
    <Container>
      <div className="d-flex align-items-center flex-column">
        <div>
          <AllStyledH3 className="py-5">Brands we Serve</AllStyledH3>
        </div>

        <div className="d-flex flex-row justify-content-center flex-wrap">
          <img src={logo1} alt="1" />
          <img src={logo2} alt="2" />
          <img src={logo3} alt="3" />
          <img src={logo4} alt="4" />
          <img src={logo5} alt="5" />
          <img src={logo1} alt="1" />
          <img src={logo2} alt="2" />
          <img src={logo3} alt="3" />
          <img src={logo4} alt="4" />
          <img src={logo5} alt="5" />
        </div>
      </div>
    </Container>
  );
};
