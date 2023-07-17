import React from "react";
import { StyledHeaderImg, TextDivStyled } from "./Header.style";
import theme from "../../../theme";

import formula from "./img/formula.png";
import {
  AllStyledH4,
  AllStyledH6,
  AllStyledP1B,
} from "../../../features/mainStyles.style";

import { Button } from "../../../core/components/button/Button";

export const Header = () => {
  return (
    <div className="d-flex">
      <div>
        <StyledHeaderImg src={formula} alt="Formula" />
      </div>
      <TextDivStyled>
        <div>
          <AllStyledH6 style={{ color: `${theme.colors.primary}` }}>
            TRENDING
          </AllStyledH6>
        </div>
        <div>
          <AllStyledH4 style={{ color: "white" }}>
            Diagnose Car Problems If You Don’t Know Much About Cars
          </AllStyledH4>
        </div>
        <div>
          <AllStyledP1B style={{ color: "white" }}>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </AllStyledP1B>
        </div>
        <div className="d-flex align-items-center my-5">
          <Button title={"Read more"} />
          <AllStyledP1B className="mx-5" style={{ color: "white" }}>
            Posted on October 6th 2021
          </AllStyledP1B>
        </div>
      </TextDivStyled>
    </div>
  );
};
