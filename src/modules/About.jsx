import React from "react";
import CubeCarousel from "../components/Cube-Carousel/CubeCarousel";

export const About = () => {
  return (
    <section id="about" className="px-4 py-10 lg:py-0 my-16 bg-gray-100">
      <div className="container px-10 gap-10 lg:gap-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <div className="flex flex-col gap-10">
            <h3 className="text-[#5D75A5] text-3xl font-bold text-center">
              Akademiya haqida
            </h3>
            <p className="text-[#5D75A5] font-semibold">
              "United IT Clubs" 2022-yil tashkil etilgan. Kompaniya direktori
              Bekzod Shamsiddinov so'zlariga ko'ra, kompaniyaning falsafasi
              O'zbekistonning IT sohasidagi xalqaro standartlarga javob
              beradigan jamoani shakllantirish, yosh dasturchilarga o'zlari
              ustida ishlash va shu bilan birga rasmiy ravishda ishga joylashish
              imkoniyatini yaratish, kompaniyani IT jahon sahnasida taniqli
              joyga olib borishdan iborat. <br />
              <br /> Kompaniya tashkil etilgan paytda jamoa atigi 10 kishidan
              iborat edi, endilikda esa jamoada +100 mutaxassislar faoliyat olib
              boradi. Bu odamlar kompaniya maqsadiga ishonib, loyihaning
              rivojlanishiga hissa qo'shishga intilishdi. Bugungi kunga qadar bu
              odamlar kompaniyaga sodiq qolgan holda, o'z jamoalarini turli
              yo'nalishlarda (Backend, Frontend, QA, Mobile, Analytics,
              Marketing Team va boshqalar) rivojlantirib kelmoqdalar.
            </p>
          </div>
        </div>
        <CubeCarousel />
      </div>
    </section>
  );
};
