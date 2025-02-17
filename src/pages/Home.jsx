import React from "react";
import { Hero } from "../modules/Hero";
import { Features } from "../modules/Features";
import { About } from "../modules/About";
import { Booking } from "../modules/Booking";
import { Service } from "../modules/Service";
import { Portfolio } from "../modules/Portfolio";
import { Team } from "../modules/Team";

export const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <Portfolio />
      <Features />
      <Team />
      <Booking />
    </>
  );
};
