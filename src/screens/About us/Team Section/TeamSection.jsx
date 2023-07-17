import React from "react";
import { Background, TeamCard, TeamCardText } from "./TeamSection.style";
import { Container } from "react-bootstrap";
import {
  AllStyledH1,
  AllStyledH2,
  AllStyledP2B,
  AllStyledT02,
} from "../../../features/mainStyles.style";

import Javena from "./img/JavenaMelo.png";
import Paul from "./img/PaulHonson.png";
import Devon from "./img/DevonLane.png";
import Jalen from "./img/JalenDavies.png";
import Kylee from "./img/KyleeDanford.png";
import Luisa from "./img/LuisaWilson.png";

export const TeamSection = () => {
  return (
    <Background>
      <Container>
        <AllStyledH1 className="text-center py-5">Meet our Team</AllStyledH1>

        <div className="d-flex gap-4 flex-wrap">
          <TeamCard style={{ backgroundImage: `url(${Javena})` }}>
            <TeamCardText>
              <AllStyledT02 style={{ color: "white" }}>
                Javena Melo
              </AllStyledT02>
              <AllStyledP2B style={{ color: "grey" }}>
                Founder, Director
              </AllStyledP2B>
            </TeamCardText>
          </TeamCard>
          <TeamCard style={{ backgroundImage: `url(${Paul})` }}>
            <TeamCardText>
              <AllStyledT02 style={{ color: "white" }}>
                Paul Honson
              </AllStyledT02>
              <AllStyledP2B style={{ color: "grey" }}>
                Head Technician
              </AllStyledP2B>
            </TeamCardText>
          </TeamCard>
          <TeamCard style={{ backgroundImage: `url(${Devon})` }}>
            <TeamCardText>
              <AllStyledT02 style={{ color: "white" }}>
                Paul Honson
              </AllStyledT02>
              <AllStyledP2B style={{ color: "grey" }}>
                Head Technician
              </AllStyledP2B>
            </TeamCardText>
          </TeamCard>
          <TeamCard style={{ backgroundImage: `url(${Jalen})` }}>
            <TeamCardText>
              <AllStyledT02 style={{ color: "white" }}>
                Jalen Davies
              </AllStyledT02>
              <AllStyledP2B style={{ color: "grey" }}>
                Marketing Manager
              </AllStyledP2B>
            </TeamCardText>
          </TeamCard>
          <TeamCard style={{ backgroundImage: `url(${Kylee})` }}>
            <TeamCardText>
              <AllStyledT02 style={{ color: "white" }}>
                Kylee Danford
              </AllStyledT02>
              <AllStyledP2B style={{ color: "grey" }}>
                Sales Manager
              </AllStyledP2B>
            </TeamCardText>
          </TeamCard>
          <TeamCard style={{ backgroundImage: `url(${Luisa})` }}>
            <TeamCardText>
              <AllStyledT02 style={{ color: "white" }}>
                Luisa Wilson
              </AllStyledT02>
              <AllStyledP2B style={{ color: "grey" }}>
                Support Assistant
              </AllStyledP2B>
            </TeamCardText>
          </TeamCard>
        </div>
      </Container>
    </Background>
  );
};
