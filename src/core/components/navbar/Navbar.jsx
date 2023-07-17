import React from "react";
import { StandartDiv } from "../../../features/standartDiv.style";
import {
  NavItem,
  NavLink,
  NavbarContainer,
  Logo,
  NavMenu,
  FlexDivInNavBar,
  FlexAlignDivInNavBar,
  styledPhoneNumber,
} from "./navbar.style";
import phoneIcon from "./svg/Assistance Icon.svg";
import { AllStyledP1B } from "../../../features/mainStyles.style";

export const Navbar = () => {
  return (
    <StandartDiv className="py-2">
      <FlexDivInNavBar>
        <FlexAlignDivInNavBar>
          <Logo>finsweet</Logo>
        </FlexAlignDivInNavBar>

        <NavbarContainer>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about-us">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
          <FlexAlignDivInNavBar>
            <div>
              <img src={phoneIcon} alt="Phoneicon" />
            </div>
            <div className="m-0 p-0">
              <p className="m-0 p-0"> Road Assistance</p>

              <AllStyledP1B className="m-0 p-0">1800 265 24 52</AllStyledP1B>
            </div>
          </FlexAlignDivInNavBar>
        </NavbarContainer>
      </FlexDivInNavBar>
    </StandartDiv>
  );
};
