import React from "react";
import { Button } from "../../../core/components/button/Button";
import {
  AllStyledH1,
  AllStyledP1B,
  AllStyledP2B,
  DisplayFlex,
} from "../../../features/mainStyles.style";
import { useTranslation } from "react-i18next";
import "../../../features/translations/Translations";

import clockIcon from "./img/clockIcon.svg";
import mechanicImg from "./img/mechanicImg.jpg";
import QuickServiceImg from "./img/QuickServiceImg.png";
import RatingImg from "./img/RatingImg.png";

import { Container, Row, Col, Flex } from "react-bootstrap";
import {
  QuickServiceImgStyled,
  RatingImgStyled,
  SpacedCol,
} from "./Header.style";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="py-5 px-0">
      <Container>
        <Row className="d-flex flex-row">
          <SpacedCol>
            <div>
              <AllStyledH1>{t("HomeHeaderTitle")}</AllStyledH1>
            </div>
            <div>
              <Button title="Book a service" />
            </div>

            <DisplayFlex>
              <div className="p-0 m-0 d-flex align-items-center">
                <p className="p-0 m-0 d-inline-block">
                  <img src={clockIcon} alt="clock" className="mr-1" />
                </p>
              </div>

              <Col className="m-0 p-0">
                <AllStyledP2B className="m-0 p-0 text-muted">
                  {t("WeAreOpen")}
                </AllStyledP2B>

                <AllStyledP1B className="m-0 p-0 ">
                  {t("workHours")}
                </AllStyledP1B>
              </Col>
            </DisplayFlex>
          </SpacedCol>

          <Col className="m-0 p-0 d-flex align-items-center">
            <div className="ml-auto">
              <img
                src={mechanicImg}
                alt="Mechanic picture"
                className="d-block align-self-end"
              />
            </div>
            <QuickServiceImgStyled
              src={QuickServiceImg}
              alt="Quick service picture"
            />
            <RatingImgStyled src={RatingImg} alt="Rating picture" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
