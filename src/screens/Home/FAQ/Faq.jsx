import React from "react";
import {
  Background,
  QuestionCard,
  QuestionDiv,
  QuestionReplay,
  TitleDiv,
} from "./Faq.style";
import { Container } from "react-bootstrap";
import {
  AllStyledH3,
  AllStyledP1B,
  AllStyledT02,
} from "../../../features/mainStyles.style";

import minus from "./img/minus.png";
import plus from "./img/plus.png";

export const Faq = () => {
  return (
    <Background>
      <Container>
        <TitleDiv>
          <AllStyledH3>Frequently Asked Questions</AllStyledH3>
        </TitleDiv>
        <QuestionDiv>
          <div className="d-flex justify-content-between">
            <AllStyledT02 className="my-0">
              How long should a car repair take?
            </AllStyledT02>
            <img src={minus} alt="minus" />
          </div>
          <QuestionReplay className="my-0">
            <AllStyledP1B className="m-0 text-muted">
              I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car I have got
              my car repaired at Finsweet I have got my car repaired at Finsweet
            </AllStyledP1B>
          </QuestionReplay>
        </QuestionDiv>
        <QuestionCard>
          <div>
            <AllStyledT02 className="m-0">
              How do I schedule my car's appointment ?
            </AllStyledT02>
          </div>
          <div>
            <img src={plus} alt="" />
          </div>
        </QuestionCard>
        <QuestionCard>
          <div>
            <AllStyledT02 className="m-0">
              What are the repair services provided?
            </AllStyledT02>
          </div>
          <div>
            <img src={plus} alt="" />
          </div>
        </QuestionCard>
        <QuestionCard>
          <div>
            <AllStyledT02 className="m-0">
              How do I find auto body shops near me?
            </AllStyledT02>
          </div>
          <div>
            <img src={plus} alt="" />
          </div>
        </QuestionCard>
        <QuestionCard>
          <div>
            <AllStyledT02 className="m-0">
              Genuine spare parts during car repair?
            </AllStyledT02>
          </div>
          <div>
            <img src={plus} alt="" />
          </div>
        </QuestionCard>
      </Container>
    </Background>
  );
};
