import React from "react";
import { Background, QuoteInput, Width50 } from "./GetInTouch.style";
import { Container } from "react-bootstrap";
import {
  AllStyledH1,
  AllStyledP2B,
  AllStyledT02,
} from "../../../features/mainStyles.style";

import { Button } from "../../../core/components/button/Button";

export const GetInTouch = () => {
  return (
    <Background>
      <Container className="d-flex justify-content-between">
        <Width50>
          <AllStyledH1>Get in touch with our experts</AllStyledH1>
          <div className="py-5">
            <QuoteInput type="text" placeholder="Your full Name" />
            <QuoteInput type="text" placeholder="Your Email" />
            <QuoteInput type="text" placeholder="Select service type" />
            <QuoteInput type="text" placeholder="Message" />
          </div>

          <Button title={"Send message"} />
        </Width50>
        <div className="d-flex flex-column justify-content-center">
          <AllStyledP2B className="text-muted">Address</AllStyledP2B>
          <AllStyledT02>NH 234 Public Square San Francisco 65368</AllStyledT02>
          <AllStyledP2B className="text-muted">Contact Details</AllStyledP2B>
          <AllStyledT02>1800 265 24 52 </AllStyledT02>
          <AllStyledT02>Finsweet@gmail.com</AllStyledT02>
          <AllStyledP2B className="text-muted">Opening Hours</AllStyledP2B>
          <AllStyledT02>Monday to Friday 9:00 AM to 10:00 AM</AllStyledT02>
        </div>
      </Container>
    </Background>
  );
};
