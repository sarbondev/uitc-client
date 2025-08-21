"use client";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Enhanced mock project data
const mockProjects = [
  {
    _id: "1",
    title: "Vizitka dizayni",
    description: "Muallif: Rahmonov Otabek",
    fullDescription:
      "Professional biznes kartalar dizayni. Zamonaviy va chiroyli ko'rinishda tayyorlangan vizitka namunalari. Bu loyiha davomida biz mijozning brendini aks ettiruvchi noyob dizayn yaratdik.",
    category: "design",
    images: [
      "https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
      "https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
    ],
    featured: true,
    client: "ABC Company",
    date: "2024-01-15",
    duration: "2 hafta",
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    stats: {
      views: "2.5K",
      likes: "340",
      downloads: "120",
    },
    tags: ["Brending", "Print Design", "Corporate"],
    testimonial: {
      text: "Ajoyib ish! Bizning kutganimizdan ham zo'r bo'lib chiqdi.",
      author: "John Doe",
      position: "ABC Company CEO",
    },
  },
  {
    _id: "2",
    title: "Web sayt dizayni",
    description: "Zamonaviy web dizayn",
    fullDescription: "Responsive va zamonaviy web sayt dizayni",
    category: "web",
    images: ["/placeholder.svg?height=600&width=800&text=Website"],
    client: "Tech Startup",
    date: "2024-02-01",
  },
];

export const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const project = mockProjects.find((p) => p._id === id);
  const relatedProjects = mockProjects
    .filter((p) => p._id !== id && p.category === project?.category)
    .slice(0, 2);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#55b8ff]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#5d75a5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-white/20">
            <div className="text-8xl font-bold bg-gradient-to-r from-[#55b8ff] to-white bg-clip-text text-transparent mb-6 animate-bounce">
              404
            </div>
            <h1 className="text-white text-2xl mb-4 font-light">
              Loyiha topilmadi
            </h1>
            <p className="text-white/70 mb-8">
              Siz qidirayotgan loyiha mavjud emas
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-[#55b8ff]/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-64 h-64 bg-[#5d75a5]/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#55b8ff]/5 to-[#5d75a5]/5 rounded-full blur-3xl animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="inline-flex items-center text-white/70 hover:text-[#55b8ff] transition-all duration-300 group bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-[#55b8ff]/30"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Orqaga
            </Link>
            <div className="text-white/50 text-sm">
              Bosh sahifa / Loyihalar / {project.title}
            </div>
          </div>

          {project.stats && (
            <div className="hidden md:flex items-center space-x-6 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <div className="text-center">
                <div className="text-[#55b8ff] font-bold">
                  {project.stats.views}
                </div>
                <div className="text-white/60 text-xs">Ko'rishlar</div>
              </div>
              <div className="text-center">
                <div className="text-[#55b8ff] font-bold">
                  {project.stats.likes}
                </div>
                <div className="text-white/60 text-xs">Yoqtirishlar</div>
              </div>
              <div className="text-center">
                <div className="text-[#55b8ff] font-bold">
                  {project.stats.downloads}
                </div>
                <div className="text-white/60 text-xs">Yuklab olishlar</div>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Project Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                  {project.category === "web"
                    ? "Web dizayn"
                    : project.category === "design"
                    ? "Grafik dizayn"
                    : "3D modeling"}
                </span>
                {project.featured && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-medium">
                    ⭐ Tanlangan
                  </span>
                )}
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-[#55b8ff] to-[#5d75a5] bg-clip-text text-transparent mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-white/80 text-xl leading-relaxed mb-8">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-[#55b8ff] text-sm font-medium mb-2">
                  Mijoz
                </div>
                <div className="text-white font-bold">{project.client}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-[#55b8ff] text-sm font-medium mb-2">
                  Sana
                </div>
                <div className="text-white font-bold">{project.date}</div>
              </div>
              {project.duration && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-[#55b8ff] text-sm font-medium mb-2">
                    Davomiyligi
                  </div>
                  <div className="text-white font-bold">{project.duration}</div>
                </div>
              )}
              {project.tools && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-[#55b8ff] text-sm font-medium mb-2">
                    Vositalar
                  </div>
                  <div className="text-white font-bold">
                    {project.tools.join(", ")}
                  </div>
                </div>
              )}
            </div>

            {project.tags && (
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right: Main Image */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 shadow-2xl">
              <div
                className="aspect-video rounded-2xl overflow-hidden cursor-pointer group relative"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={project.images[selectedImage] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {project.images.length > 1 && (
                <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-[#55b8ff] shadow-lg"
                          : "border-white/20 hover:border-white/40"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {project.images.length > 1 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Loyiha galereyasi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#55b8ff]/30 transition-all duration-300 group cursor-pointer"
                  onClick={() => {
                    setSelectedImage(index + 1);
                    setIsLightboxOpen(true);
                  }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - ${index + 2}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-white/80 font-medium">
                      Rasm {index + 2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.testimonial && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
              <div className="text-4xl text-[#55b8ff] mb-6">"</div>
              <blockquote className="text-white text-xl lg:text-2xl font-light italic mb-8 leading-relaxed">
                {project.testimonial.text}
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] rounded-full flex items-center justify-center text-white font-bold">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">
                    {project.testimonial.author}
                  </div>
                  <div className="text-white/60 text-sm">
                    {project.testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {relatedProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              O'xshash loyihalar
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject._id}
                  to={`/loyiha/${relatedProject._id}`}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#55b8ff]/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedProject.images[0] || "/placeholder.svg"}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-white/70">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 inline-block">
            <h3 className="text-white text-2xl font-bold mb-4">
              Sizga ham shunday loyiha kerakmi?
            </h3>
            <p className="text-white/70 mb-6">
              Biz bilan bog'laning va o'z loyihangizni boshlang
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium"
              >
                Bog'lanish
              </Link>
              <Link
                to="/"
                className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/5 transition-all duration-300 font-medium"
              >
                Boshqa loyihalar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#55b8ff] transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <img
                src={project.images[selectedImage] || "/placeholder.svg"}
                alt={project.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {project.images.length > 1 && (
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage > 0
                        ? selectedImage - 1
                        : project.images.length - 1
                    )
                  }
                  className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage < project.images.length - 1
                        ? selectedImage + 1
                        : 0
                    )
                  }
                  className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
