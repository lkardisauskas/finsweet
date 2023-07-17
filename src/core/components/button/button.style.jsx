import styled from "styled-components";
import theme from "../../../theme";

export const StyledButtonPrimary = styled.button`
  border-radius: 12px;
  border: 1px solid ${theme.colors.primary};
  background: ${(props) => (props.color ? "black" : `${theme.colors.primary}`)};
  color: white;
  padding: 16px 40px;
  line-height: 31.5px;
  font-size: ${theme.fonts.p1};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgb(199 52 6);
  }
`;
// export const StyledButtonPrimary = styled.button`
//   border-radius: 12px;
//   border: 1px solid ${theme.colors.primary};
//   background: ${theme.colors.primary};
//   color: white;
//   padding: 16px 40px;
//   line-height: 31.5px;
//   font-size: ${theme.fonts.p1};
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: rgb(199 52 6);
//   }
// `;
