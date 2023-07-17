import React from "react";
import {
  Background,
  CheckMarkStyled,
  PictureContainer,
  TextContainer,
} from "./HowSecondSection.style";
import { Container } from "react-bootstrap";
import {
  AllStyledH3,
  AllStyledP1B,
  AllStyledT02,
} from "../../../features/mainStyles.style";

import gtrImg from "./img/gtr.png";
import wheelImg from "./img/wheel.png";

import { Button } from "../../../core/components/button/Button";

export const HowSecondSection = () => {
  return (
    <Background>
      <Container className="d-flex align-items-center">
        <PictureContainer>
          <img src={wheelImg} alt="Sport car" />
          <img src={gtrImg} alt="golf" className="align-self-center" />
        </PictureContainer>
        <TextContainer>
          <AllStyledH3 className="my-5">
            Diagnose Car Problems If You Don’t Know Much About Cars
          </AllStyledH3>
          <AllStyledP1B>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </AllStyledP1B>
          <Button title={"Book a service"} />
        </TextContainer>
      </Container>
    </Background>
  );
};
