import React from "react";

import mazdaImg from "./img/mazda.png";
import krokodilai from "./img/krokodilai.png";

import { AllStyledH3 } from "../../../features/mainStyles.style";
import { OrangeBackground } from "./Cta.style";
import { Button } from "../button/Button";
export const Cta = () => {
  return (
    <div className="d-flex position-relative">
      {/* <div className="position-relative">
        <img src={mazdaImg} alt="Mazda" />
      </div> */}
      <div
        style={{
          backgroundImage: `url(${mazdaImg})`,
          width: "55%",
          height: "500px",
        }}
      >
        <OrangeBackground className="d-flex align-items-center justify-content-center flex-column">
          <AllStyledH3 style={{ color: "white" }}>
            Get in touch with us for your service related query
          </AllStyledH3>
          <Button title={"Contact Us"} />
        </OrangeBackground>
      </div>

      <div>
        <img src={krokodilai} alt="Krokodilai" />
      </div>
    </div>
  );
};
