import React from "react";
import { Background1, Background2, Background3 } from "./ColorSection.style";

import image1 from "./img/Image1.png";
import image2 from "./img/Image2.png";
import image3 from "./img/Image3.png";
import { AllStyledH4, AllStyledT02 } from "../../../features/mainStyles.style";

export const ColorSection = () => {
  return (
    <div className="d-flex justify-content-center">
      <Background1
        style={{
          backgroundImage: `linear-gradient(rgba(255, 100, 51, 0.8), rgba(255, 100, 51, 0.8)), url(${image1})`,
        }}
      >
        <AllStyledH4 style={{ color: "white" }}>
          Serve our customers and always deliver the customer service
        </AllStyledH4>
        <AllStyledT02 style={{ color: "lightgrey" }}>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes{" "}
        </AllStyledT02>
      </Background1>
      <Background2
        style={{
          backgroundImage: `linear-gradient(rgba(30, 27, 27, 0.8), rgba(30, 27, 27, 0.8)), url(${image2})`,
        }}
      >
        <AllStyledH4 style={{ color: "white" }}>
          To be the world’s most eader in automotive business solutions.
        </AllStyledH4>
        <AllStyledT02 style={{ color: "lightgrey" }}>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes{" "}
        </AllStyledT02>
      </Background2>
      <Background3
        style={{
          backgroundImage: `linear-gradient(rgba(102, 28, 231, 0.8), rgba(102, 28, 231, 0.8)), url(${image3})`,
        }}
      >
        <AllStyledH4 style={{ color: "white" }}>
          We value the service we provide and our loyal returning customers
        </AllStyledH4>
        <AllStyledT02 style={{ color: "lightgrey" }}>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes{" "}
        </AllStyledT02>
      </Background3>
    </div>
  );
};
