import React from "react";
import { Container } from "react-bootstrap";
import {
  AllStyledH2,
  AllStyledP1B,
  AllStyledP2B,
  AllStyledT01,
} from "../../../features/mainStyles.style";

import { useTranslation } from "react-i18next";
import { Button } from "../../../core/components/button/Button";
import {
  Circle,
  DivWithPadding,
  LineStyled,
  StyledCirclebottom,
  StyledH4,
} from "./ProcessScetion.style";

import Line from "./img/Line.png";
import CicleBottom from "./img/Circle Bottom.png";

export const ProcessSection = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <DivWithPadding>
          <div className="d-flex align-items-center">
            <div>
              <AllStyledH2>{t("ProccesSectionTitle")}</AllStyledH2>
              <AllStyledP2B className="text-muted">
                {t("ProccesSectionBody")}
              </AllStyledP2B>
              <Button title="Learn more" />
            </div>

            <div>
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
                  <AllStyledP1B>
                    {t("ProccessSectionGetQuoteBody")}
                  </AllStyledP1B>
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
                  <LineStyled src={Line} alt="Line" />
                </div>
                <div>
                  <AllStyledT01>{t("ProccesSectionServiceDone")}</AllStyledT01>
                  <AllStyledP1B>
                    {t("ProccesSectionServiceDoneBody")}
                  </AllStyledP1B>
                </div>
              </div>
            </div>
          </div>
        </DivWithPadding>
      </div>
    </Container>
  );
};
