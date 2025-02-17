import React from "react";
import "./Progress.css";

export const Progress = () => {
  document.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent =
      (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
    document
      .querySelector(".progressbar")
      .style.setProperty("--progress", scrollPercent);
  });
  return <div className="progressbar"></div>;
};
