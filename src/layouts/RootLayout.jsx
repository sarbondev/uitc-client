import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Progress } from "../components/Progress/Progress";
import { Footer } from "../components/Footer/Footer";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Progress />
      <Outlet />
      <Footer />
    </>
  );
};
