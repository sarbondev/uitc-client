import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/photos/1.webp";
import img2 from "../../assets/photos/2.webp";
import img3 from "../../assets/photos/3.webp";
import img4 from "../../assets/photos/4.webp";
import img5 from "../../assets/photos/5.jpg";
import img6 from "../../assets/photos/6.jpg";
import img7 from "../../assets/photos/7.jpg";
import img8 from "../../assets/photos/8.jpg";
import img9 from "../../assets/photos/9.jpg";

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
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
          (img, index) => (
            <SwiperSlide key={index} className="w-full h-[100%]">
              <img src={img} className="w-full h-full object-cover" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
