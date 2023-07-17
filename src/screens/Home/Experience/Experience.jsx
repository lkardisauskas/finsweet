import React from "react";
import {
  AllStyledH2,
  AllStyledH3,
  AllStyledT02,
} from "../../../features/mainStyles.style";
import { Container, Row, Col } from "react-bootstrap";
import { Background } from "./Experience.style";
import theme from "../../../theme";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Background className="py-5">
        <Container>
          <Row className="justify-content-between">
            <Col>
              <div>
                <AllStyledH2 style={{ color: theme.colors.secondary }}>
                  20+
                </AllStyledH2>
                <AllStyledT02>{t("ExperienceProffesional")}</AllStyledT02>
              </div>
            </Col>
            <Col>
              <div>
                <AllStyledH2 style={{ color: theme.colors.secondary }}>
                  10+
                </AllStyledH2>
                <AllStyledT02>{t("ExperienceExperience")}</AllStyledT02>
              </div>
            </Col>
            <Col>
              <div>
                <AllStyledH2 style={{ color: theme.colors.secondary }}>
                  12K+
                </AllStyledH2>
                <AllStyledT02>{t("ExperienceServiceClosed")}</AllStyledT02>
              </div>
            </Col>
            <Col>
              <div>
                <AllStyledH2 style={{ color: theme.colors.secondary }}>
                  100%
                </AllStyledH2>
                <AllStyledT02>
                  {t("ExperienceCustomerSatisfaction")}
                </AllStyledT02>
              </div>
            </Col>
          </Row>
        </Container>
      </Background>
    </div>
  );
};
