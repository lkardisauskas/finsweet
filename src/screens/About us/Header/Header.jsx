import React from "react";
import { Background, TextDiv, MarginText } from "./header.style";
import { Container } from "react-bootstrap";
import { AllStyledH1, AllStyledP1B } from "../../../features/mainStyles.style";
import { Button } from "../../../core/components/button/Button";

import engineImg from "./img/engine.png";

export const Header = () => {
  return (
    <Background>
      <Container className="d-flex">
        <div>
          <img src={engineImg} alt="Engine" />
        </div>
        <TextDiv>
          <AllStyledH1>About us</AllStyledH1>
          <MarginText>
            <AllStyledP1B>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does
            </AllStyledP1B>
          </MarginText>
          <Button title={"Book a service"} />
        </TextDiv>
      </Container>
    </Background>
  );
};
