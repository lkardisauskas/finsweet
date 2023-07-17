import styled from "styled-components";
import theme from "../../../theme";

export const Background = styled.div`
  background: ${theme.colors.lightgrey};
`;

export const TitleDiv = styled.div`
  padding-top: 5rem;
  max-width: 860px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const CardDiv = styled.div`
  width: 426px;
  height: 424px;
  background: white;
`;

export const CardSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 1rem;
`;
