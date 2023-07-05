import styled from "styled-components";
import theme from "../../../theme";

export const Circle = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: ${theme.colors.secondary};
  overflow: hidden;
`;

export const StyledH4 = styled.h4`
  color: white;
  z-index: 2;
`;

export const StyledCirclebottom = styled.img`
  position: absolute;
  z-index: 1;
`;

export const LineStyled = styled.img`
  max-height: 4.5rem;
  max-width: 2.5px;
`;

export const DivWithPadding = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
