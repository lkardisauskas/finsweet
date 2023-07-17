import React from "react";
import { Background, BlogFourLeft } from "./BlogFour.style";
import { Container } from "react-bootstrap";

import headlights from "./img/headlights.png";
import gtr from "./img/gtr.png";
import wheel from "./img/wheel.png";
import redcarHeadlight from "./img/redcarHeadlight.png";

import {
  AllStyledH4,
  AllStyledP1B,
  AllStyledP2B,
  AllStyledT01,
} from "../../../features/mainStyles.style";

export const BlogFour = () => {
  return (
    <Background>
      <Container className="d-flex">
        <div>
          <BlogFourLeft>
            <img src={headlights} alt="Headlights" />
            <AllStyledP2B className="my-5">
              Posted on October 6th 2021
            </AllStyledP2B>
            <AllStyledH4>
              Should I Buy a New Car or Lease a New Car in 2021?
            </AllStyledH4>
            <AllStyledP2B>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </AllStyledP2B>
            <AllStyledP1B>Read more</AllStyledP1B>
          </BlogFourLeft>
        </div>
        <div className="px-4 d-flex flex-column justify-content-center gap-4">
          <div className="d-flex align-items-center">
            <img src={gtr} alt="gtr image" />
            <div>
              <AllStyledT01>
                Get an Awesome Number Plate for Your New Car
              </AllStyledT01>
              <AllStyledP2B>Posted on October 6th 2021</AllStyledP2B>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={wheel} alt="gtr image" />
            <div>
              <AllStyledT01>
                Would you Let a Robot Drive your Car? Our AI Future
              </AllStyledT01>
              <AllStyledP2B>Posted on October 6th 2021</AllStyledP2B>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={redcarHeadlight} alt="gtr image" />
            <div>
              <AllStyledT01>
                Will Electric Technology Soon Rule The Road?
              </AllStyledT01>
              <AllStyledP2B>Posted on October 6th 2021</AllStyledP2B>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
};
