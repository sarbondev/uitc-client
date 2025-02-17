import useSWR from "swr";
import React from "react";
import { fetcher } from "../middlewares/Fetcher";

export const Service = () => {
  const { data, error, isLoading } = useSWR(`/services`, fetcher);

  return (
    <section id="services">
      <div className="container px-4 pt-20 md:pt-0">
        <h1 className="text-center my-10 lg:my-20 text-3xl md:text-5xl font-bold text-[#5D75A5]">
          Bizning xizmatlarimiz
        </h1>
        {error && (
          <div className="flex items-center justify-center h-[40vh]">
            <h1 className="text-4xl font-bold text-red-600">
              Xatolik yuz berdi!
            </h1>
          </div>
        )}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="p-5 md:p-10 rounded-2xl bg-gray-200 animate-pulse"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div className="h-8 w-3/4 bg-gray-300 rounded mb-3"></div>
                <div className="h-6 w-full bg-gray-300 rounded opacity-80 mb-3"></div>
                <div className="h-6 w-full bg-gray-300 rounded opacity-80"></div>
              </div>
            ))}
          </div>
        ) : data.data && data.data?.length <= 0 ? (
          <div className="flex items-center justify-center h-[40vh]">
            <h1 className="text-4xl font-bold text-[#5D75A5]">Ma'lumot yo'q</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
            {data.data?.map((service, index) => (
              <div
                key={index}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="p-5 md:p-10 rounded-2xl transition-all hover:scale-[1.05]"
              >
                <h1 className="text-3xl text-[#5D75A5] font-bold mb-3">
                  {service.title}
                </h1>
                <p className="opacity-80">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
