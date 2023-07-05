import styled from "styled-components";
import theme from "../../../theme";
import { Col } from "react-bootstrap";

export const SpacedCol = styled(Col)`
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const QuickServiceImgStyled = styled.img`
  position: absolute;
  top: 7%;
  right: 30%;
`;
export const RatingImgStyled = styled.img`
  position: absolute;
  left: 60%;
  top: 40%;
`;
