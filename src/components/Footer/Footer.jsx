import image1 from "../../assets/logowhite.svg";
import { Link } from "react-router-dom";
import { InstagramLogo, PhoneCall, TelegramLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-[#5d75a5] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          <div className="flex flex-col gap-8">
            <Link to="/" className="inline-block">
              <img
                src={image1 || "/placeholder.svg"}
                alt="Company Logo"
                className="h-28 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <div className="flex flex-col gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <a
                  className="text-white flex items-center gap-3 group"
                  href="tel:+998906900048"
                >
                  <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                    <PhoneCall size={24} color="white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">+998 90 690 00 48</div>
                    <div className="opacity-90">+998 99 974 00 01</div>
                  </div>
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/uitcuz"
                >
                  <InstagramLogo
                    size={24}
                    color="white"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/uitc_uz"
                >
                  <TelegramLogo
                    size={24}
                    color="white"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-4">Tez havolalar</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#about"
                  className="text-white/90 hover:text-white transition-all duration-300 text-base font-medium hover:translate-x-2 inline-block"
                >
                  → Biz haqimizda
                </a>
              </li>
              <li>
                <Link
                  to="/our-projects"
                  className="text-white/90 hover:text-white transition-all duration-300 text-base font-medium hover:translate-x-2 inline-block"
                >
                  → Biz qilgan ishlari
                </Link>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white/90 hover:text-white transition-all duration-300 text-base font-medium hover:translate-x-2 inline-block"
                >
                  → Afzalliklarimiz
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-white/90 hover:text-white transition-all duration-300 text-base font-medium hover:translate-x-2 inline-block"
                >
                  → Darsga ro'yxatdan o'tish
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Bizning manzil
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 hover:bg-white/20 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.21297615113187!2d71.60478401803488!3d40.99445063014272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4bfec6552db7%3A0x79e96c1dd15fef2d!2sUnited%20IT%20Clubs!5e0!3m2!1sru!2s!4v1722167918923!5m2!1sru!2s"
                height="280"
                width="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} United IT Clubs. Barcha huquqlar
              himoyalangan.
            </p>
            <p className="text-white/60 text-xs">
              Zamonaviy texnologiyalar va professional ta'lim
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
