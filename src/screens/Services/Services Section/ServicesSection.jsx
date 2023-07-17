import React from "react";
import {
  AutoDiagnosticsDiv,
  Background,
  FirstGridItem,
  GridItem,
} from "./services.style";
import { Col, Container, Row } from "react-bootstrap";

import BatteriesIcon from "./img/BatteriesIcon.png";
import BodyWorkIcon from "./img/BodyWorkIcon.png";
import DiagnosticsIcon from "./img/DiagnosticsIcon.png";
import EngineRepairIcon from "./img/EngineRepairIcon.png";
import WheelRepairIconSVG from "./img/WheelRepairIconSVG.svg";
import OilIcon from "./img/OilIcon.png";

import wheel from "./img/wheel.png";

import {
  AllStyledH3,
  AllStyledP1B,
  AllStyledT02,
} from "../../../features/mainStyles.style";

import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <Container>
        <div className="d-flex">
          <AutoDiagnosticsDiv>
            <div>
              <div>
                <img src={wheel} alt="Wheel" />
              </div>
              <div>
                <AllStyledH3 className="my-4">Auto Diagnostics</AllStyledH3>
                <AllStyledT02 className="text-muted">
                  Through True Rich Attended does no end it his mother since
                  favourable real had half every him case in packages enquire we
                  up ecstatic. Through True Rich Attended does no end it his
                  mother.{" "}
                </AllStyledT02>
                <div>
                  <AllStyledP1B>See service details</AllStyledP1B>
                </div>
              </div>
            </div>
          </AutoDiagnosticsDiv>
          <div className="px-4">
            <Row>
              <Col md={6} lg={6} className="my-4">
                <FirstGridItem>
                  <img src={DiagnosticsIcon} alt="DiagnosticsIcon" />
                  <AllStyledT02 className="my-2">
                    {t("OfferDiagnostics")}
                  </AllStyledT02>
                </FirstGridItem>
              </Col>
              <Col md={6} lg={6} className="my-4">
                <GridItem>
                  <img src={EngineRepairIcon} alt="EngineRepaireIcon" />
                  <AllStyledT02 className="my-2">
                    {t("OfferEngineRepair")}
                  </AllStyledT02>
                </GridItem>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} className="my-4">
                <GridItem>
                  <img src={WheelRepairIconSVG} alt="WheelRepairIcon" />
                  <AllStyledT02 className="my-2">
                    {t("OfferWheelRepair")}
                  </AllStyledT02>
                </GridItem>
              </Col>
              <Col md={6} lg={6} className="my-4">
                <GridItem>
                  <img src={OilIcon} alt="OilIcon" />
                  <AllStyledT02 className="my-2">
                    {t("OfferOilFilter")}
                  </AllStyledT02>
                </GridItem>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} className="my-4">
                <GridItem>
                  <img src={BodyWorkIcon} alt="BodyWorkIcon" />
                  <AllStyledT02 className="my-2">
                    {t("OfferBodyWork")}
                  </AllStyledT02>
                </GridItem>
              </Col>
              <Col md={6} lg={6} className="my-4">
                <GridItem>
                  <img src={BatteriesIcon} alt="BatteriesIcon" />
                  <AllStyledT02 className="my-2">
                    {t("OfferBatteries")}
                  </AllStyledT02>
                </GridItem>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </Background>
  );
};
