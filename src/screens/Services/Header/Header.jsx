import React from "react";
import { Background, HeaderImage, HeaderRight } from "./header.style";
import { Container } from "react-bootstrap";
import { AllStyledH1, AllStyledP1B } from "../../../features/mainStyles.style";
import { Button } from "../../../core/components/button/Button";

import porsche from "./img/porsche.png";

export const Header = () => {
  return (
    <Background>
      <Container>
        <div className="d-flex">
          <HeaderImage src={porsche} alt="Porsche" />
          <HeaderRight style={{ color: "white" }}>
            <AllStyledH1>Our services</AllStyledH1>
            <AllStyledP1B className="my-5">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does
            </AllStyledP1B>
            <Button title={"Book a service"} />
          </HeaderRight>
        </div>
      </Container>
    </Background>
  );
};
