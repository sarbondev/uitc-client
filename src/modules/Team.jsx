import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/effect-fade";
import { fetcher } from "../middlewares/Fetcher";
import useSWR from "swr";

export const Team = () => {
  const { data, error, isLoading } = useSWR(`/team`, fetcher);

  return (
    <section>
      <div className="container px-4 py-10 lg:py-20">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-[#5D75A5]">
          Bizning jamoamiz
        </h1>
        {error && (
          <div className="flex items-center justify-center h-[40vh]">
            <h1 className="text-4xl font-bold text-red-600">
              Xatolik yuz berdi!
            </h1>
          </div>
        )}
        {isLoading ? (
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="w-full h-full py-10 lg:py-20"
          >
            {Array(4)
              .fill()
              .map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <figure className="bg-blue-50 w-[300px] h-[300px] rounded-full overflow-hidden">
                    <Skeleton circle={true} height={300} width={300} />
                  </figure>
                  <h1 className="text-lg md:text-xl xl:text-2xl font-bold text-[#5D75A5]">
                    <Skeleton width={200} />
                  </h1>
                  <p className="text-[13px] xl:text-lg font-semibold text-[#5D75A5] opacity-70">
                    <Skeleton width={150} />
                  </p>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : data && data.data.length <= 0 ? (
          <div className="flex items-center justify-center h-[40vh]">
            <h1 className="text-4xl font-bold text-[#5D75A5]">Ma'lumot yo'q</h1>
          </div>
        ) : (
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            loop={data.data.length >= 4 ? true : false}
            modules={[Autoplay]}
            className="w-full h-full py-10 lg:py-20"
          >
            {data.data &&
              data.data.map((worker, index) => (
                <SwiperSlide
                  key={index}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <figure className="h-[300px] w-[300px] overflow-hidden rounded-full">
                    <img
                      className="object-cover w-full h-full"
                      src={worker.image}
                      alt={worker.name}
                    />
                  </figure>
                  <div className="py-2">
                    <h1 className="text-lg md:text-xl xl:text-2xl font-bold text-[#5D75A5]">
                      {worker.name}
                    </h1>
                    <p className="text-[13px] xl:text-lg font-semibold text-[#5D75A5] opacity-70">
                      {worker.job}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
