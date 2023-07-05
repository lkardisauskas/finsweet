import React from "react";
import { StyledButtonPrimary } from "./button.style";

export const Button = ({ title }) => {
  return (
    <div>
      <StyledButtonPrimary>{title}</StyledButtonPrimary>
    </div>
  );
};
