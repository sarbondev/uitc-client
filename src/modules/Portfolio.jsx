import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../middlewares/Fetcher";
import useSWR from "swr";
import "react-loading-skeleton/dist/skeleton.css";

export const Portfolio = () => {
  const [urlToGetData, setUrlToGetData] = useState(`/projects`);
  const { data, error, isLoading, mutate } = useSWR(
    `${urlToGetData}?pageSize=6`,
    fetcher
  );

  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    mutate();
  }, [urlToGetData, mutate]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setUrlToGetData(`/projects${category ? `?category=${category}&` : ""}`);
    setHasMore(true);
  };

  const handleShowMore = () => {
    if (data?.data?.length < 6) {
      setHasMore(false);
    }
  };

  const renderSkeletons = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="rounded-xl grid-item h-full w-full bg-gray-200 animate-pulse"
      ></div>
    ));

  const renderProjects = () =>
    data?.data?.length > 0 ? (
      data.data.map((item, index) => (
        <Link
          to={"/loyihalar/" + item._id}
          key={index}
          className="card overflow-hidden grid-item h-full w-full"
          data-aos="fade-up"
        >
          <img
            src={item.images[0]}
            className="w-full h-full object-cover rounded-xl"
            alt={item.title || "Portfolio Image"}
          />
        </Link>
      ))
    ) : (
      <div className="flex items-center justify-center h-[40vh]">
        <h1 className="text-4xl font-bold text-center text-[#5D75A5]">
          Loyihalar yo'q
        </h1>
      </div>
    );

  return (
    <section className="px-4" id="our-projects">
      <div className="container">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-10"
          data-aos="fade-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#5D75A5]">
            Bizning loyihalarimiz
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["", "web", "design", "modeling"].map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`text-[#5D75A5] border-2 border-[#5D75A5] transition-all font-semibold text-[12px] md:text-sm py-2 px-4 rounded-[20px] ${
                  selectedCategory === category
                    ? "bg-[#5D75A5] text-white"
                    : "hover:bg-[#5D75A5] hover:text-white"
                }`}
              >
                {category
                  ? category.charAt(0).toUpperCase() + category.slice(1)
                  : "All Projects"}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="py-10 grid-gallery h-screen">{renderSkeletons()}</div>
        ) : (
          <div className="py-10 grid-gallery">{renderProjects()}</div>
        )}

        {hasMore && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleShowMore}
              className="bg-[#5D75A5] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#4A5F88] transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
