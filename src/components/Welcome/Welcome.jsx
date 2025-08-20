import React, { useState, useEffect } from "react";
import "./animation.css";

const BackgroundAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 4200);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      className={`background-animation ${
        isHidden ? "hidden" : isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <h1 className="block-effect" style={{ "--td": "1.2s" }}>
        <div
          className="block-reveal"
          style={{ "--bc": "#5D75A5", "--d": ".1s" }}
        >
          UITC saytiga
        </div>
        <div
          className="block-reveal"
          style={{ "--bc": "#55B8FF", "--d": ".5s" }}
        >
          Hush kelibsiz
        </div>
      </h1>
    </div>
  );
};

export default BackgroundAnimation;
