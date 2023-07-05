import styled from "styled-components";
import theme from "../../../theme";

export const Background = styled.div`
  background: ${theme.colors.lightgrey};
  width: 100%;
`;

export const PaddingDiv = styled.div`
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

export const GridItem = styled.div`
  height: 232px;
  width: 316px;
  background: white;
  padding: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const ThirdGridItem = styled(GridItem)`
  color: white;
  background: ${theme.colors.primary};
`;

export const LearnAboutStyled = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
`;
