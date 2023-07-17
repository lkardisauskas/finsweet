import React from "react";
import { Background, BlogItem } from "./BlogFullSection.style";
import { Container } from "react-bootstrap";

import spydakas from "./img/1spydakas.png";
import interior1 from "./img/2interior.png";
import tools from "./img/3tools.png";
import wheels from "./img/4wheels.png";
import interior2 from "./img/5interior.png";
import golf from "./img/6golf.png";
import {
  AllStyledP2B,
  AllStyledT01,
  AllStyledT02,
} from "../../../features/mainStyles.style";

export const BlogFullSection = () => {
  return (
    <Background>
      <Container className="d-flex gap-4 flex-wrap">
        <BlogItem>
          <img src={spydakas} alt="spydakas" />
          <AllStyledP2B className="my-3">
            Posted on October 6th 2021
          </AllStyledP2B>
          <AllStyledT01>
            5 Genius Car Accessories You Should Never Drive Without
          </AllStyledT01>
          <AllStyledP2B className="my-3">
            We provide a full range of front end mechanical repairs for all
            makes and models We provide a full range of front end mechanical
            repairs for all makes and models
          </AllStyledP2B>
        </BlogItem>
        <BlogItem>
          <img src={interior1} alt="interior" />
          <AllStyledP2B className="my-3">
            Posted on October 6th 2021
          </AllStyledP2B>
          <AllStyledT01>
            5 Genius Car Accessories You Should Never Drive Without
          </AllStyledT01>
          <AllStyledP2B className="my-3">
            We provide a full range of front end mechanical repairs for all
            makes and models We provide a full range of front end mechanical
            repairs for all makes and models
          </AllStyledP2B>
        </BlogItem>
        <BlogItem>
          <img src={tools} alt="tools" />
          <AllStyledP2B className="my-3">
            Posted on October 6th 2021
          </AllStyledP2B>
          <AllStyledT01>
            We provide blow straight past it with the wheels skidding
          </AllStyledT01>
          <AllStyledP2B className="my-3">
            We provide a full range of front end mechanical repairs for all
            makes and models We provide a full range of front end mechanical
            repairs for all makes and models
          </AllStyledP2B>
        </BlogItem>
        <BlogItem>
          <img src={wheels} alt="wheels" />
          <AllStyledP2B className="my-3">
            Posted on October 6th 2021
          </AllStyledP2B>
          <AllStyledT01>
            We provide blow straight past it with the wheels skidding
          </AllStyledT01>
          <AllStyledP2B className="my-3">
            We provide a full range of front end mechanical repairs for all
            makes and models We provide a full range of front end mechanical
            repairs for all makes and models
          </AllStyledP2B>
        </BlogItem>
        <BlogItem>
          <img src={interior2} alt="interior2" />
          <AllStyledP2B className="my-3">
            Posted on October 6th 2021
          </AllStyledP2B>
          <AllStyledT01>
            5 Genius Car Accessories You Should Never Drive Without
          </AllStyledT01>
          <AllStyledP2B className="my-3">
            We provide a full range of front end mechanical repairs for all
            makes and models We provide a full range of front end mechanical
            repairs for all makes and models
          </AllStyledP2B>
        </BlogItem>
        <BlogItem>
          <img src={golf} alt="interior2" />
          <AllStyledP2B className="my-3">
            Posted on October 6th 2021
          </AllStyledP2B>
          <AllStyledT01>
            5 Genius Car Accessories You Should Never Drive Without
          </AllStyledT01>
          <AllStyledP2B className="my-3">
            We provide a full range of front end mechanical repairs for all
            makes and models We provide a full range of front end mechanical
            repairs for all makes and models
          </AllStyledP2B>
        </BlogItem>
      </Container>
    </Background>
  );
};
