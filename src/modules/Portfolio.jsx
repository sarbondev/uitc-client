import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../middlewares/Fetcher";
import useSWR from "swr";
import "react-loading-skeleton/dist/skeleton.css";

export const Portfolio = () => {
  const [pageSize, setPageSize] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getUrl = (category, size) => {
    if (category) {
      return `/projects?category=${category}&pageSize=${size}`;
    }
    return `/projects?pageSize=${size}`;
  };

  const [url, setUrl] = useState(getUrl(selectedCategory, pageSize));

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  useEffect(() => {
    setUrl(getUrl(selectedCategory, pageSize));
  }, [selectedCategory, pageSize]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPageSize(6);
    setUrl(getUrl(category, 6));
  };

  const handleLoadMore = () => {
    const newPageSize = pageSize + 6;
    setPageSize(newPageSize);
  };

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
          <div className="py-10 grid-gallery h-screen">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl grid-item h-full w-full bg-gray-200 animate-pulse"
              ></div>
            ))}
          </div>
        ) : data?.data?.length > 0 ? (
          <div className="py-10 grid-gallery">
            {data.data.map((item, index) => (
              <Link
                to={"/loyihalar/" + item._id}
                key={index}
                className="card overflow-hidden grid-item h-full w-full"
                data-aos="fade-up"
              >
                <img
                  src={item.images[0] || "/placeholder.svg"}
                  className="w-full h-full object-cover rounded-xl"
                  alt={item.title || "Portfolio Image"}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[40vh]">
            <h1 className="text-4xl font-bold text-center text-[#5D75A5]">
              Loyiha mavjud emas
            </h1>
          </div>
        )}

        {data?.data?.length > 0 && data?.total > data?.data?.length && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleLoadMore}
              className="bg-[#5D75A5] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#4A5F88] transition-all"
            >
              Ko'proq ko'rish
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
