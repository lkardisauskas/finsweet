import React from "react";
import { Header } from "../screens/Home/Header/Header";
import { Quote } from "./Home/Quote/Quote";
import { ProcessSection } from "./Home/Process Section/ProcessSection";
import { Offer } from "./Home/Offer/Offer";
import { Cta } from "../core/components/CTA/Cta";
import { Experience } from "./Home/Experience/Experience";
import { Brands } from "./Home/Brands/Brands";
import { Testimonials } from "./Home/Tertimonials/Testimonials";
import { Faq } from "./Home/FAQ/Faq";
import { FooterTop } from "../core/components/footer/FooterTop/FooterTop";
import { FooterBottom } from "../core/components/footer/FooterBottom/FooterBottom";

export const Home = () => {
  return (
    <>
      <Header />;
      <Quote />
      <ProcessSection />
      <Offer />
      <Cta />
      <Experience />
      <Brands />
      <Testimonials />
      <Faq />
      <FooterTop />
      <FooterBottom />
    </>
  );
};
