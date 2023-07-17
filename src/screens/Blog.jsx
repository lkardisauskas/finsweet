import React from "react";
import { Header } from "./Blog/Header/Header";
import { BlogFour } from "./Blog/BlogFour/BlogFour";
import { BlogFullSection } from "./Blog/BlogFullSection/BlogFullSection";
import { Cta } from "../core/components/CTA/Cta";
import { FooterTop } from "../core/components/footer/FooterTop/FooterTop";
import { FooterBottom } from "../core/components/footer/FooterBottom/FooterBottom";

export const Blog = () => {
  return (
    <>
      <Header />
      <BlogFour />
      <BlogFullSection />
      <Cta />
      <FooterTop />
      <FooterBottom />
    </>
  );
};
