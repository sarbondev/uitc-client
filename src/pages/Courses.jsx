import React, { useState } from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import { fetcher } from "../middlewares/Fetcher";

export const Courses = () => {
  const { data, error, isLoading } = useSWR(`/courses`, fetcher);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = data?.data?.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen pb-20">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] items-center">
          <h1 className="my-10 lg:my-20 text-3xl md:text-5xl font-bold text-[#5D75A5]">
            Kurslar
          </h1>
          <form className="flex justify-end items-center border-2 border-[#5D75A5]">
            <input
              type="text"
              placeholder="Kurslarni qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 outline-none"
            />
            <button
              type="button"
              className="bg-[#5D75A5] px-5 py-2 font-bold text-white"
            >
              Qidirish
            </button>
          </form>
        </div>

        {error && (
          <div className="flex items-center justify-center h-[40vh]">
            <h1 className="text-4xl font-bold text-red-600">
              Xatolik yuz berdi!
            </h1>
          </div>
        )}

        {isLoading ? (
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="rounded-3xl overflow-hidden animate-pulse"
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <div className="h-48 bg-gray-300 w-full"></div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <div
                  key={index}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <Link
                    to={`/courses/${course._id}`}
                    className="overflow-hidden w-full"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full object-cover"
                    />
                  </Link>
                  <div className="p-4 flex flex-col gap-2">
                    <h1 className="text-[#5D75A5] text-2xl font-bold">
                      {course.title}
                    </h1>
                    <p>{course.description.slice(0, 100)}...</p>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/courses/${course._id}`}
                        className="bg-[#55B8FF] hover:bg-[#3b94d4] transition-all text-white px-6 py-2 rounded-3xl font-bold"
                      >
                        Batafsil
                      </Link>
                      <span className="text-[#55B8FF] text-2xl font-bold">
                        {course.price.toLocaleString()} so'm
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-[40vh]">
                <h1 className="text-4xl font-bold text-gray-500">
                  Kurs topilmadi!
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
