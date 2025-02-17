import React from "react";
import image1 from "../../assets/logowhite.svg";
import { Link } from "react-router-dom";
import { InstagramLogo, PhoneCall, TelegramLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-[#2C3036] px-4">
      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
        <div className="flex flex-col gap-10">
          <Link to="/">
            <img src={image1} alt="Company Logo" />
          </Link>
          <div className="flex flex-col gap-5">
            <a
              className="text-[#C1C1C1] flex items-center gap-2"
              href="tel:+998906900048"
            >
              <PhoneCall size={30} color="#C1C1C1" />
              <div>
                <span>+998 90 690 00 48</span>
                <br />
                <span>+998 99 974 00 01</span>
              </div>
            </a>
            <a
              className="text-[#C1C1C1] flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/uitcuz"
            >
              <InstagramLogo size={30} color="#C1C1C1" />
              <span>@uitcuz</span>
            </a>
            <a
              className="text-[#C1C1C1] flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/uitc_uz"
            >
              <TelegramLogo size={30} color="#C1C1C1" />
              <span>@uitc_uz</span>
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-5 md:gap-10">
          <li>
            <a
              href="#about"
              className="font-semibold text-[#C1C1C1] hover:text-white transition-all text-[15px]"
            >
              Biz haqimizda
            </a>
          </li>
          <li>
            <Link
              to="/our-projects"
              className="font-semibold text-[#C1C1C1] hover:text-white transition-all text-[15px]"
            >
              Biz qilgan ishlari
            </Link>
          </li>
          <li>
            <a
              href="#features"
              className="font-semibold text-[#C1C1C1] hover:text-white transition-all text-[15px]"
            >
              Afzalliklarimiz
            </a>
          </li>
          <li>
            <a
              href="#booking"
              className="font-semibold text-[#C1C1C1] hover:text-white transition-all text-[15px]"
            >
              Darsga ro‘yxatdan o‘tish
            </a>
          </li>
        </ul>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.21297615113187!2d71.60478401803488!3d40.99445063014272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bfec6552db7%3A0x79e96c1dd15fef2d!2sUnited%20IT%20Clubs!5e0!3m2!1sru!2s!4v1722167918923!5m2!1sru!2s"
          height="350"
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};
