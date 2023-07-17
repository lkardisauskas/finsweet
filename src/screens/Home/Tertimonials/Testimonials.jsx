import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  AllStyledH3,
  AllStyledP2B,
  AllStyledT02,
} from "../../../features/mainStyles.style";
import { Background } from "../Experience/Experience.style";
import {
  ImgStyled,
  MaxWidthstyled,
  NameDivStyled,
  TestimonialStyledCard,
  TextDiv,
} from "./Testimonials.style";

import Jonathan from "./img/Jonathan.png";
import Smith from "./img/Smith2x.png";
import Lines from "./img/Lines.png";

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <Background className="py-5">
      <Container className="py-5 text-center">
        <MaxWidthstyled>
          <AllStyledH3>{t("TestimonialsTitle")}</AllStyledH3>
        </MaxWidthstyled>
        <div className="d-flex justify-content-between">
          <TestimonialStyledCard>
            <div>
              <NameDivStyled>
                <ImgStyled src={Jonathan} alt="" />
                <div className="mx-3 d-flex flex-column align-items-start">
                  <AllStyledT02 className="my-0">Jonathan Vallem</AllStyledT02>
                  <AllStyledP2B className="text-muted">New york</AllStyledP2B>
                </div>
              </NameDivStyled>
            </div>
            <TextDiv>
              <AllStyledT02 className="text-start">
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car in a
                short comprehensive look on all the working
              </AllStyledT02>
            </TextDiv>
          </TestimonialStyledCard>
          <TestimonialStyledCard>
            <div>
              <NameDivStyled>
                <ImgStyled src={Smith} alt="" />
                <div className="mx-3 d-flex flex-column align-items-start">
                  <AllStyledT02 className="my-0">Smith Johnson</AllStyledT02>
                  <AllStyledP2B className="text-muted">New york</AllStyledP2B>
                </div>
              </NameDivStyled>
            </div>
            <TextDiv>
              <AllStyledT02 className="text-start">
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car in a
                short comprehensive look on all the working
              </AllStyledT02>
            </TextDiv>
          </TestimonialStyledCard>
        </div>
        <div>
          <img src={Lines} alt="lines" className="my-5" />
        </div>
      </Container>
    </Background>
  );
};
