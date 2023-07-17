import React from "react";
import { Header } from "./About us/Header/Header";
import { StepsSection } from "./About us/Steps Section/StepsSection";
import { ColorSection } from "./About us/Color Section/ColorSection";
import { FeaturesSection } from "./About us/Features Section/FeaturesSection";
import { Experience } from "../../src/screens/Home/Experience/Experience";
import { TeamSection } from "./About us/Team Section/TeamSection";
import { Cta } from "../core/components/CTA/Cta";
import { FooterTop } from "../core/components/footer/FooterTop/FooterTop";
import { FooterBottom } from "../core/components/footer/FooterBottom/FooterBottom";

export const AboutUs = () => {
  return (
    <>
      <Header />
      <StepsSection />
      <ColorSection />
      <FeaturesSection />
      <Experience />
      <TeamSection />
      <Cta />
      <FooterTop />
      <FooterBottom />
    </>
  );
};
