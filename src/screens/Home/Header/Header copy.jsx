import React from "react";
import { StandartDiv } from "../../features/standartDiv.style";
import { Button } from "../../core/components/button/Button";
import {
  AllStyledH1,
  AllStyledP1B,
  AllStyledP2B,
  DisplayFlex,
} from "../../features/mainStyles.style";
import { useTranslation } from "react-i18next";
import "../../features/translations/Translations";
import clockIcon from "./img/clockIcon.svg";

import { Container, Row, Col, Flex } from "react-bootstrap";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <StandartDiv>
      <div>
        <div>
          <div>
            <AllStyledH1>{t("HomeHeaderTitle")}</AllStyledH1>
          </div>
          <div>
            <Button title="Book a service" />
          </div>
          <DisplayFlex>
            <div>
              <p>
                <img src={clockIcon} alt="clock" />
              </p>
            </div>
            <div>
              <AllStyledP2B>{t("WeAreOpen")} </AllStyledP2B>
              <AllStyledP1B>{t("workHours")}</AllStyledP1B>
            </div>
          </DisplayFlex>
        </div>
        <div></div>
      </div>
    </StandartDiv>
  );
};
