import React from "react";
import { Header } from "./Services/Header/Header";
import { ServicesSection } from "./Services/Services Section/ServicesSection";
import { HowFirstSection } from "./Services/How 1 Section/HowFirstSection";
import { HowSecondSection } from "./Services/How 2 Section/HowSecondSection";
import { Cta } from "../core/components/CTA/Cta";
import { FooterTop } from "../core/components/footer/FooterTop/FooterTop";
import { FooterBottom } from "../core/components/footer/FooterBottom/FooterBottom";

export const Services = () => {
  return (
    <>
      <Header />
      <ServicesSection />
      <HowFirstSection />
      <HowSecondSection />
      <Cta />
      <FooterTop />
      <FooterBottom />
    </>
  );
};
