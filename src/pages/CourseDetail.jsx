import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Booking } from "../modules/Booking";

export const CourseDetail = () => {
  const { baseUrl } = useSelector((state) => state.common);
  const { id } = useParams();

  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        setIsPending(true);
        const response = (await axios.get(`${baseUrl}api/courses/${id}`)).data;
        setData(response.data);
      } catch (error) {
        setIsError(error.response?.data?.message || "Something went wrong.");
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [id, baseUrl]);

  return (
    <>
      <input
        type="text"
        autoFocus={true}
        className="opacity-0 absolute top-[-400px] left-[-23231px]"
      />
      <section className="min-h-screen">
        <div className="container pt-20">
          {isError && <h1>Error</h1>}
          {isPending ? (
            <h1>Loading..</h1>
          ) : (
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
          )}
        </div>
      </section>
      <Booking />
    </>
  );
};
