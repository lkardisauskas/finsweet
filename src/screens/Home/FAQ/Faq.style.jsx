import styled from "styled-components";
import theme from "../../../theme";

export const Background = styled.div`
  background: ${theme.colors.steelgrey};
  padding: 5rem;
`;

export const TitleDiv = styled.div`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
`;

export const QuestionDiv = styled.div`
  margin: auto;
  padding: 40px;
  background: white;
  max-width: 900px;
`;

export const QuestionReplay = styled.div`
  max-width: 700px;
`;

export const QuestionCard = styled.div`
  max-width: 900px;
  margin: 15px auto;
  padding: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
`;
