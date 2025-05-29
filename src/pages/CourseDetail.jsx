import React from "react";
import { useParams } from "react-router-dom";
import { Booking } from "../modules/Booking";
import useSWR from "swr";
import { fetcher } from "../middlewares/Fetcher";

export const CourseDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(`/courses/${id}`, fetcher);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="h-16 w-16 border-[6px] border-dotted border-black animate-spin rounded-full"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-medium text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <input
        type="text"
        autoFocus={true}
        className="opacity-0 absolute top-[-400px] left-[-23231px]"
      />
      <section className="min-h-screen">
        <div className="container pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <img src={data.image} alt={data.title} className="w-full" />
            <div className="p-6 flex flex-col justify-center gap-6">
              <h1 className="text-[#5D75A5] text-4xl font-bold">
                {data.title}
              </h1>
              <p className="text-lg opacity-70 font-semibold">
                {data.description}
              </p>
              <div className="flex gap-4 items-center">
                <a
                  href={`#booking`}
                  className="bg-[#55B8FF] hover:bg-[#3b94d4] transition-all text-white px-6 py-2 rounded-3xl font-bold"
                >
                  Ro'yxatdan o'tish
                </a>
                <span className="text-[#55B8FF] text-2xl font-bold">
                  {data.price?.toLocaleString()} so'm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Booking />
    </>
  );
};
