import { Hero } from "../modules/Hero";
import { Features } from "../modules/Features";
import { About } from "../modules/About";
import { Booking } from "../modules/Booking";
import { Portfolio } from "../modules/Portfolio";
import { Team } from "../modules/Team";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Features />
      <Team />
      <Booking />
    </>
  );
};
