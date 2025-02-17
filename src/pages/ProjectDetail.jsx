import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { XCircle } from "@phosphor-icons/react";

export const ProjectDetail = () => {
  const { baseUrl } = useSelector((state) => state.common);
  const { id } = useParams();

  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async (url) => {
      try {
        setIsPending(true);
        const { data } = (await axios.get(url)).data;
        setData(data);
      } catch (error) {
        setIsError(error.response?.data?.message || "Something went wrong.");
      } finally {
        setIsPending(false);
      }
    };
    getData(`${baseUrl}api/projects/${id}`);
  }, [id, baseUrl]);

  return (
    <section className="min-h-screen bg-white">
      {data.heroImage && (
        <div
          className="relative w-full h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">{data.title}</h1>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        {isPending ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden h-full w-full shadow-lg"
              >
                <Skeleton height="300px" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center justify-center text-red-600">
            <XCircle size={48} weight="fill" />
            <h2 className="mt-4 text-xl font-semibold">Error</h2>
            <p className="text-center mt-2">{isError}</p>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {data.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{data.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.images?.map((projectImage, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={projectImage}
                    alt={`Project image ${index + 1}`}
                    className="object-cover w-full h-60 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
