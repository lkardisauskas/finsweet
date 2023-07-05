import React from "react";
import {
  Background,
  GridItem,
  LearnAboutStyled,
  PaddingDiv,
  ThirdGridItem,
} from "./Offer.style";
import { Container, Row, Col } from "react-bootstrap";
import {
  AllStyledH2,
  AllStyledP1B,
  AllStyledT02,
} from "../../../features/mainStyles.style";

import { useTranslation } from "react-i18next";

import DiagnosticsIcon from "./img/DiagnosticsIcon.png";
import EngineRepairIcon from "./img/EngineRepairIcon.png";
import WheelRepairIcon from "./img/WheelRepairIcon.png";
import OilIcon from "./img/OilIcon.png";
import BodyWorkIcon from "./img/BodyWorkIcon.png";
import BatteriesIcon from "./img/BatteriesIcon.png";
import InsuranceIcon from "./img/InsuranceclaimIcon.png";
import CustomServiceIcon from "./img/CustomServiceIcon.png";
import Arrow from "../Quote/img/Arrow.svg";

export const Offer = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <PaddingDiv>
        <Container className="d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <div>
              <AllStyledT02>{t("OfferTitle02")}</AllStyledT02>
            </div>
            <div className="d-flex justify-content-center">
              <AllStyledH2 className="text-center">
                {t("OfferHeader")}
              </AllStyledH2>
            </div>

            <div className="my-5">
              <Row>
                <Col md={3}>
                  <GridItem>
                    <img src={DiagnosticsIcon} alt="DiagnosticsIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferDiagnostics")}
                    </AllStyledT02>
                  </GridItem>
                </Col>
                <Col md={3}>
                  <GridItem>
                    <img src={EngineRepairIcon} alt="EngineRepaireIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferEngineRepair")}
                    </AllStyledT02>
                  </GridItem>
                </Col>
                <Col md={3}>
                  <ThirdGridItem>
                    <img src={WheelRepairIcon} alt="WheelRepairIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferWheelRepair")}
                    </AllStyledT02>
                  </ThirdGridItem>
                </Col>
                <Col md={3}>
                  <GridItem>
                    <img src={OilIcon} alt="OilIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferOilFilter")}
                    </AllStyledT02>
                  </GridItem>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <GridItem>
                    <img src={BodyWorkIcon} alt="BodyWorkIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferBodyWork")}
                    </AllStyledT02>
                  </GridItem>
                </Col>
                <Col md={3}>
                  <GridItem>
                    <img src={BatteriesIcon} alt="BatteriesIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferBatteries")}
                    </AllStyledT02>
                  </GridItem>
                </Col>
                <Col md={3}>
                  <GridItem>
                    <img src={InsuranceIcon} alt="InsuranceIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferInsurance")}
                    </AllStyledT02>
                  </GridItem>
                </Col>
                <Col md={3}>
                  <GridItem>
                    <img src={CustomServiceIcon} alt="CustomServiceIcon" />
                    <AllStyledT02 className="my-2">
                      {t("OfferCustomService")}
                    </AllStyledT02>
                  </GridItem>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <LearnAboutStyled>
          <div>
            <AllStyledP1B>
              Learn about services
              <img src={Arrow} alt="Arrow" className="mx-3" />
            </AllStyledP1B>
          </div>
        </LearnAboutStyled>
      </PaddingDiv>
    </Background>
  );
};
