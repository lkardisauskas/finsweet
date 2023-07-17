import React from "react";
import {
  Background,
  CardDiv,
  CardSettings,
  TitleDiv,
} from "./FeaturesSection.style";
import { Container } from "react-bootstrap";
import {
  AllStyledH2,
  AllStyledP1B,
  AllStyledT01,
} from "../../../features/mainStyles.style";

import ConvenientServiceIcon from "./img/ConvenientService.png";
import ExperMechanicsIcon from "./img/ExperMechanics.png";
import TransparentPricing from "./img/TransparentPricing.png";

export const FeaturesSection = () => {
  return (
    <Background>
      <Container>
        <TitleDiv>
          <AllStyledH2 className="text-center">
            Services we provide to our valued customers
          </AllStyledH2>
        </TitleDiv>
        <div className="d-flex">
          <CardDiv>
            <CardSettings className="text-center">
              <div>
                <img
                  src={ConvenientServiceIcon}
                  alt="Convienient Service icon"
                />
              </div>
              <div>
                <AllStyledT01>Convenient Service</AllStyledT01>
              </div>
              <div>
                <AllStyledP1B className="text-muted">
                  Through True Rich Attended does no end it his mother since
                  real had half every him end it his mother
                </AllStyledP1B>
              </div>
            </CardSettings>
          </CardDiv>

          <CardDiv>
            <CardSettings className="text-center">
              <div>
                <img src={ExperMechanicsIcon} alt="Convienient Service icon" />
              </div>
              <div>
                <AllStyledT01>Expert Mechanics</AllStyledT01>
              </div>
              <div>
                <AllStyledP1B className="text-muted">
                  Through True Rich Attended does no end it his mother since
                  real had half every him end it his mother
                </AllStyledP1B>
              </div>
            </CardSettings>
          </CardDiv>

          <CardDiv>
            <CardSettings className="text-center">
              <div>
                <img src={TransparentPricing} alt="Convienient Service icon" />
              </div>
              <div>
                <AllStyledT01>Transparent Pricing</AllStyledT01>
              </div>
              <div>
                <AllStyledP1B className="text-muted">
                  Through True Rich Attended does no end it his mother since
                  real had half every him end it his mother
                </AllStyledP1B>
              </div>
            </CardSettings>
          </CardDiv>
        </div>
      </Container>
    </Background>
  );
};
