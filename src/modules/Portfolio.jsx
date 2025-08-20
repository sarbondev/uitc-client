import { useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../middlewares/Fetcher";

export const Portfolio = () => {
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getUrl = () => {
    const size = page * itemsPerPage;
    return selectedCategory
      ? `/projects?category=${selectedCategory}&pageSize=${size}`
      : `/projects?pageSize=${size}`;
  };

  const { data: projects, error, isValidating } = useSWR(getUrl(), fetcher);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className="px-4 py-16 bg-white min-h-screen" id="our-projects">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center justify-between">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: "#5d75a5" }}
          >
            Bizning loyihalarimiz
          </h1>

          <div className="flex flex-wrap gap-3 justify-end">
            {[
              { key: "", label: "Barcha loyihalar" },
              { key: "web", label: "Vebsayt" },
              { key: "design", label: "Brending" },
              { key: "modeling", label: "3D modeling" },
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => handleCategoryClick(category.key)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === category.key
                    ? "text-white border-transparent hover:opacity-90"
                    : "text-white border-transparent hover:opacity-80"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category.key ? "#5d75a5" : "#55b8ff",
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {(!projects || isValidating) && (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div
                className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
                style={{ borderColor: "#55b8ff" }}
              ></div>
              <p style={{ color: "#5d75a5" }}>Yuklanmoqda...</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex justify-center items-center h-64">
            <p className="text-center text-red-500 text-lg">
              Xatolik yuz berdi
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {projects && projects.projects.length > 0 && (
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {projects.projects.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer break-inside-avoid mb-4"
                >
                  <Link to={`/loyihalar/${item._id}`} className="block">
                    <div className="relative overflow-hidden">
                      <img
                        src={
                          item.images?.[0] ||
                          "/placeholder.svg?height=300&width=400" ||
                          "/placeholder.svg"
                        }
                        alt={item.title}
                        className="w-full h-auto min-h-[200px] max-h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-200 opacity-90 mb-3 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                            {item.category === "web"
                              ? "Vebsayt"
                              : item.category === "design"
                              ? "Brending"
                              : item.category === "modeling"
                              ? "3D modeling"
                              : "Umumiy"}
                          </span>

                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-500" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {projects && projects.projects.length >= page * itemsPerPage && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
              style={{ backgroundColor: "#55b8ff" }}
            >
              Ko'proq ko'rish
            </button>
          </div>
        )}

        {/* Empty State */}
        {projects &&
          projects.projects.length === 0 &&
          !isValidating &&
          !error && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#5d75a5" }}
                >
                  Loyiha topilmadi
                </h3>
                <p style={{ color: "#5d75a5" }}>
                  Tanlangan kategoriyada hozircha loyihalar mavjud emas
                </p>
              </div>
            </div>
          )}
      </div>
    </section>
  );
};
