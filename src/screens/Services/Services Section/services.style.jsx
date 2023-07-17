import styled from "styled-components";
import theme from "../../../theme";

export const Background = styled.div`
  background: #f5f5f5;
  padding: 5rem;
`;

export const AutoDiagnosticsDiv = styled.div`
  background: white;
  padding: 4rem 3rem;
  max-width: 650px;
  display: flex;
`;
export const GridItem = styled.div`
  height: 232px;
  width: 296px;
  background: white;
  padding: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const FirstGridItem = styled(GridItem)`
  color: white;
  background: ${theme.colors.primary};
`;
