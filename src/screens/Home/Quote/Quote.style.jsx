import styled from "styled-components";
import theme from "../../../theme";

export const QuoteBackground = styled.div`
  width: 100%;
  background: ${theme.colors.steelgrey};
`;

export const QuoteConvServImg = styled.img`
  width: 47px;
  height: 47px;
`;

export const QuoteInput = styled.input`
  background: white;
  border: none;
  border-radius: 1px;
  color: black;
  padding: 20px;
  width: 100%;
  font-size: ${theme.fonts.p2};
  margin-bottom: 4px;
`;
