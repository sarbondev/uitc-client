import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Carousel } from "../components/Carousel/Carousel";
import "swiper/css";
import "swiper/css/effect-fade";

export const Hero = () => {
  const heroTitles = [
    {
      title: "Veb dasturlash kurslari",
      text: "So‘nggi texnologiyalar asosida veb-sayt ni 0 dan boshlab o‘z kuchingiz bilan tayyorlashni ushbu kurs orqali o‘rganib olasiz ",
    },
    {
      title: "3d modeling kurslari",
      text: "Kompyuterda 3D fazoda ishlovchi dasturlar orqali har qanday jismning uch o‘lchamli ko‘rinishini yasashni o‘rganishingiz mumkin",
    },
    {
      title: "Grafik dizayn kurslari",
      text: "Kompyuter grafikasi bo‘yicha eng zamonaviy bilimlar va ko’nikmalarni bizning o‘quv kurslarimiz orqali mukammal o‘rganasiz",
    },
    {
      title: "Sun'iy intellekt kurslari",
      text: "So‘nggi texnologiyalar asosida AI dasturlarni ni 0 dan boshlab o‘z kuchingiz bilan tayyorlashni ushbu kurs orqali o‘rganib olasiz ",
    },
  ];

  return (
    <section className="h-[90vh] relative flex max-md:flex-col">
      <div className="container px-4 h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          modules={[EffectFade, Autoplay]}
          className="w-full h-full"
        >
          {heroTitles.map((title, index) => (
            <SwiperSlide
              key={index}
              className="bg-white h-full flex flex-col justify-center items-start gap-4"
            >
              <h1 className="text-6xl  md:text-6xl xl:text-8xl font-bold text-[#5D75A5]">
                {title.title}
              </h1>
              <p className="text-[16px] xl:text-lg font-semibold text-[#5D75A5] opacity-70">
                {title.text}
              </p>
              <a
                href="#booking"
                className="text-white bg-[#55B8FF] hover:bg-[#5D75A5] transition-all font-semibold text-lg py-4 px-6 rounded-[20px]"
              >
                Ro‘yxatdan o‘tish
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <Carousel />
      </div>
    </section>
  );
};
