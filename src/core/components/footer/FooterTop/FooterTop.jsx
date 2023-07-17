import React from "react";
import {
  Background,
  SocialStyled,
  StyledFooterLeft,
  StyledFooterRight,
} from "./FooterTop.style";
import { Container, Row } from "react-bootstrap";
import {
  AllStyledCaption,
  AllStyledH3,
  AllStyledP1B,
  AllStyledT02,
} from "../../../../features/mainStyles.style";

import social from "./img/Social.png";

export const FooterTop = () => {
  return (
    <Background>
      <Container className="d-flex">
        <Row>
          <StyledFooterLeft>
            <AllStyledH3 style={{ color: "white" }}>
              Get in touch with us for your service
            </AllStyledH3>
            <SocialStyled src={social} alt="" />
          </StyledFooterLeft>
        </Row>
        <Row>
          <StyledFooterRight>
            <div>
              <AllStyledP1B className="m-0" style={{ color: "grey" }}>
                Help line Number
              </AllStyledP1B>
              <AllStyledT02 className="m-0">1800 265 24 52</AllStyledT02>
            </div>
            <div className="my-5">
              <AllStyledP1B className="m-0" style={{ color: "grey" }}>
                Address
              </AllStyledP1B>
              <AllStyledT02 className="m-0">
                NH 234 Public Square San Francisco 65368
              </AllStyledT02>
            </div>
            <div className="my-5">
              <AllStyledP1B className="m-0" style={{ color: "grey" }}>
                We are open
              </AllStyledP1B>
              <AllStyledT02 className="m-0">
                Monday to Friday 9:00 AM to  10:00  AM
              </AllStyledT02>
            </div>
          </StyledFooterRight>
        </Row>
      </Container>
    </Background>
  );
};
