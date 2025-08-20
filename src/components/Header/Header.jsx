import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.css";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setScrollY(currentScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={`fixed w-full left-0 top-0 z-40 p-4 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${scrollY > 50 ? "" : "bg-transparent"}`}
    >
      <div className="container px-4 h-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="w-[140px] sm:w-[180px] lg:w-[230px]"
            src={logo}
            alt="logo"
          />
        </Link>
        <a
          className="text-white bg-[#55B8FF] hover:bg-[#5D75A5] transition-all font-semibold text-[12px] md:text-sm py-2 px-4 rounded-[20px]"
          href="tel: +998 90 064 00 48"
        >
          +998 90 690 00 48
        </a>
      </div>
    </header>
  );
};
