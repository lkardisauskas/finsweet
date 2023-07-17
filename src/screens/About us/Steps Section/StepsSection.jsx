import React from "react";
import {
  Background,
  TextDiv,
  Circle,
  LineStyled,
  StyledCirclebottom,
  StyledH4,
} from "./StepsSection.style";
import { Container } from "react-bootstrap";
import {
  AllStyledH3,
  AllStyledT02,
  AllStyledT01,
  AllStyledP1B,
} from "../../../features/mainStyles.style";

import Line from "./img/Line.png";
import CicleBottom from "./img/Circle Bottom.png";
import stepsRightImg from "./img/Steps Right.png";

import { useTranslation } from "react-i18next";

export const StepsSection = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <Container className="d-flex">
        <TextDiv>
          <AllStyledH3>
            We Provide Expert Service and aim to have a long term with you
          </AllStyledH3>
          <AllStyledT02 className="text-muted">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter
          </AllStyledT02>
          <div className="my-5">
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center">
                <Circle className="d-flex align-items-center justify-content-center mx-3 my-3">
                  <StyledH4>01</StyledH4>
                  <StyledCirclebottom src={CicleBottom} alt="circle bottom" />
                </Circle>
                <LineStyled src={Line} alt="Line" />
              </div>
              <div>
                <AllStyledT01>{t("ProccesSectionGetQuote")}</AllStyledT01>
                <AllStyledP1B>{t("ProccessSectionGetQuoteBody")}</AllStyledP1B>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center">
                <Circle className="d-flex align-items-center justify-content-center mx-3 my-3">
                  <StyledH4>02</StyledH4>
                  <StyledCirclebottom src={CicleBottom} alt="circle bottom" />
                </Circle>
                <LineStyled src={Line} alt="Line" />
              </div>
              <div>
                <AllStyledT01>{t("ProccessSectionBook")}</AllStyledT01>
                <AllStyledP1B>{t("ProccessSectionBookBody")}</AllStyledP1B>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center">
                <Circle className="d-flex align-items-center justify-content-center mx-3 my-3">
                  <StyledH4>03</StyledH4>
                  <StyledCirclebottom src={CicleBottom} alt="circle bottom" />
                </Circle>
              </div>
              <div>
                <AllStyledT01>{t("ProccesSectionServiceDone")}</AllStyledT01>
                <AllStyledP1B>
                  {t("ProccesSectionServiceDoneBody")}
                </AllStyledP1B>
              </div>
            </div>
          </div>
        </TextDiv>
        <div>
          <img src={stepsRightImg} alt="Car picture" />
        </div>
      </Container>
    </Background>
  );
};
