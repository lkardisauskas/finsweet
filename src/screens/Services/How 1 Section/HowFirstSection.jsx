import React from "react";
import {
  Background,
  CheckMarkStyled,
  PictureContainer,
  TextContainer,
} from "./HowFirstSection.style";
import { Container } from "react-bootstrap";
import { AllStyledH3, AllStyledT02 } from "../../../features/mainStyles.style";

import checkmark from "./img/Checkmark.png";
import golfImg from "./img/golf.png";
import sportCar from "./img/sport car.png";

export const HowFirstSection = () => {
  return (
    <Background>
      <Container className="d-flex align-items-center">
        <TextContainer>
          <AllStyledH3 className="my-5">
            How we work and the process we follow
          </AllStyledH3>
          <div className="d-flex">
            <CheckMarkStyled src={checkmark} alt="check mark" />
            <AllStyledT02 className="m-0">
              Through True Rich Attended does no end it his mother since
            </AllStyledT02>
          </div>
          <div className="d-flex my-5">
            <CheckMarkStyled src={checkmark} alt="check mark" />
            <AllStyledT02 className="m-0">
              Attended does no end it his mother since real had half every
            </AllStyledT02>
          </div>
          <div className="d-flex my-5">
            <CheckMarkStyled src={checkmark} alt="check mark" />
            <AllStyledT02 className="m-0">
              Since real had half every him case in packages enquire we up
              ecstatic
            </AllStyledT02>
          </div>
        </TextContainer>
        <PictureContainer>
          <img src={golfImg} alt="golf" className="align-self-center" />

          <img src={sportCar} alt="Sport car" />
        </PictureContainer>
      </Container>
    </Background>
  );
};
