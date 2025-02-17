import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/about-section/IMG_4916.webp";
import img2 from "../../assets/about-section/IMG_4917.webp";
import img6 from "../../assets/about-section/IMG_4922.webp";
import img7 from "../../assets/about-section/IMG_4923.webp";
import img8 from "../../assets/about-section/IMG_4925.webp";
import img9 from "../../assets/about-section/photo_2025-02-12_13-29-55.webp";

export default function CubeCarousel() {
  return (
    <div className="h-[70%]">
      <Swiper
        effect="cube"
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="h-full"
      >
        {[img1, img2, img6, img7, img8, img9].map((img, index) => (
          <SwiperSlide key={index} className="w-full h-[100%]">
            <img src={img} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
