import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../../theme";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   padding: 16px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 5px 0;
  border-right: 1.5px solid #939191;
`;

export const NavItem = styled.li`
  margin-right: 16px;
`;

export const NavLink = styled(Link)`
  color: #111;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const FlexDivInNavBar = styled.div`
  display: flex;
  width: 1300px;
  justify-content: space-between;
`;
export const FlexAlignDivInNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 15px;
`;

export const StyledPhoneNumber = styled.p`
  font-weight: 600;
  font-size: 18px;
`;
