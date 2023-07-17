import React from "react";
import { Background } from "./FooterBottom.style";
import { Container } from "react-bootstrap";
import {
  AllStyledH4,
  AllStyledH5,
} from "../../../../features/mainStyles.style";

import { NavMenu, NavItem, NavLink } from "./FooterBottom.style";

export const FooterBottom = () => {
  return (
    <Background>
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <AllStyledH5 className="m-0" style={{ color: "white" }}>
              finsweet
            </AllStyledH5>
          </div>
          <div className="m-0 d-flex">
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
          </div>
          <div>
            <p className="m-0 " style={{ color: "grey", alignSelf: "center" }}>
              @ Copyright Finsweet 2021
            </p>
          </div>
        </div>
      </Container>
    </Background>
  );
};
