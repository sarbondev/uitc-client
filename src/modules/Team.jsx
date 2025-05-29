import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { fetcher } from "../middlewares/Fetcher";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/effect-fade";

export const Team = () => {
  const { data, error, isLoading } = useSWR(`/team`, fetcher);

  return (
    <section>
      <div className="container px-4 py-10 lg:py-20">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-[#5D75A5] mb-8">
          Bizning jamoamiz
        </h1>
        {error && (
          <h1 className="text-xl font-bold text-red-600 p-10 rounded-xl bg-red-100 text-center">
            Malumotlarni yuklashda xatolik yuz berdi!
          </h1>
        )}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="p-5 md:p-10 rounded-2xl bg-gray-200 animate-pulse"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-6"></div>
                <div className="h-6 w-full bg-gray-300 rounded opacity-80 mb-3"></div>
                <div className="h-6 w-full bg-gray-300 rounded opacity-80"></div>
              </div>
            ))}
          </div>
        ) : data && data?.length <= 0 ? (
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
            loop={data?.length >= 4 ? true : false}
            modules={[Autoplay]}
            className="w-full h-full py-10 lg:py-20"
          >
            {data &&
              data.map((worker, index) => (
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
