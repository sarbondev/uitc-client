import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../middlewares/Fetcher";
import useSWR from "swr";

export const Portfolio = () => {
  const [size, setSize] = useState(4);
  const [pageSize, setPageSize] = useState(size);
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
    setPageSize(size);
    setUrl(getUrl(category, size));
  };

  const handleLoadMore = () => {
    const newPageSize = pageSize + size;
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
        {error && (
          <h1 className="text-xl font-bold text-red-600 p-10 rounded-xl bg-red-100 text-center">
            Malumotlarni yuklashda xatolik yuz berdi!
          </h1>
        )}
        {isLoading ? (
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-[60vh]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl h-full w-full bg-gray-200 animate-pulse"
              ></div>
            ))}
          </div>
        ) : data?.projects?.length > 0 ? (
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.projects.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="overflow-hidden rounded-2xl border shadow-sm hover:shadow-xl transition-shadow duration-300 group bg-white flex flex-col"
              >
                <Link to={`/loyihalar/${item._id}`}>
                  <img
                    src={item.images[0]}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={item.title || "Portfolio Image"}
                  />
                </Link>
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <Link
                      to={`/loyihalar/${item._id}`}
                      className="text-[#5D75A5] hover:text-[#55B8FF] transition-colors text-xl font-bold line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-3">
                    <span className="text-xs bg-[#E6EEF8] text-[#5D75A5] px-3 py-1 rounded-full font-medium capitalize">
                      {item.category || "Umumiy"}
                    </span>
                    <Link
                      to={`/loyihalar/${item._id}`}
                      className="bg-[#5D75A5] hover:bg-[#4A5F88] text-white text-sm py-2 px-4 rounded-lg transition-all"
                    >
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[40vh]">
            <h1 className="text-4xl font-bold text-center text-[#5D75A5]">
              Loyiha mavjud emas
            </h1>
          </div>
        )}

        {data?.projects?.length > 0 && data?.total > data?.projects?.length && (
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
