import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { List, X } from "@phosphor-icons/react";
import "./Header.css";

export const Header = () => {
  const [navActive, setNavActive] = useState(false);

  document.body.style.overflowY = navActive ? "hidden" : "auto";

  return (
    <header className="h-[90px] sticky left-0 top-0 z-40">
      <div className="container px-4 h-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="w-[140px] sm:w-[180px] lg:w-[230px]"
            src={logo}
            alt="logo"
          />
        </Link>
        <nav className={`${navActive ? "active" : ""}`}>
          <ul className={`flex gap-10`}>
            <X
              onClick={() => setNavActive(false)}
              size={25}
              color="white"
              className="nav_close"
            />
            <li>
              <a
                href="/#services"
                className="font-bold text-[#5D75A5] hover:text-[#55B8FF] transition-all text-[15px]"
              >
                Xizmatlar
              </a>
            </li>
            <li>
              <a
                href="/#our-projects"
                className="font-bold text-[#5D75A5] hover:text-[#55B8FF] transition-all text-[15px]"
              >
                Loyihalar
              </a>
            </li>
            <li>
              <Link
                to="/courses"
                className="font-bold text-[#5D75A5] hover:text-[#55B8FF] transition-all text-[15px]"
              >
                Kurslar
              </Link>
            </li>
            <li>
              <Link
                to="/staffs"
                className="font-bold text-[#5D75A5] hover:text-[#55B8FF] transition-all text-[15px]"
              >
                Jamoa
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center">
          <a
            className="text-white bg-[#55B8FF] hover:bg-[#5D75A5] transition-all font-semibold text-[12px] md:text-sm py-2 px-4 rounded-[20px]"
            href="tel: +998 90 064 00 48"
          >
            +998 90 690 00 48
          </a>
          <List
            size={25}
            onClick={() => setNavActive(true)}
            className="nav_open"
          />
        </div>
      </div>
    </header>
  );
};
