import { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation();

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
    <>
      <header
        className={`fixed w-full left-0 top-0 z-50 transition-all duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${
          scrollY > 50
            ? "bg-white/80 backdrop-blur-md border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto p-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="logo" className="h-16" />
          </Link>

          <a
            href="tel:+998906900048"
            className="flex items-center space-x-2 text-white bg-gradient-to-r from-[#55B8FF] to-[#5D75A5] hover:from-[#5D75A5] hover:to-[#55B8FF] transition-all duration-300 font-semibold text-sm py-2.5 px-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+998 90 690 00 48</span>
          </a>
        </div>
      </header>
    </>
  );
};
