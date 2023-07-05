import React from "react";
import { Header } from "../screens/Home/Header/Header";
import { Quote } from "./Home/Quote/Quote";
import { ProcessSection } from "./Home/Process Section/ProcessSection";
import { Offer } from "./Home/Offer/Offer";

export const Home = () => {
  return (
    <>
      <Header />;
      <Quote />
      <ProcessSection />
      <Offer />
    </>
  );
};
