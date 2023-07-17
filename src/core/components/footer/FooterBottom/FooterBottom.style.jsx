import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../../../theme";

export const Background = styled.div`
  background: #1e1b1b;
  padding: 5rem;
`;

export const NavLink = styled(Link)`
  color: #f1f1f1;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 5px 0;
  align-self: center;
`;

export const NavItem = styled.li`
  margin-right: 16px;
`;
