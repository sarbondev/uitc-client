import { Link } from "react-router-dom";

function FloatingShape({ className, gradient }) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`w-96 h-24 rounded-full ${gradient} backdrop-blur-sm border border-white/20 shadow-lg animate-pulse`}
      />
    </div>
  );
}

function DecorativeCircle({ className, size = "w-4 h-4" }) {
  return (
    <div
      className={`absolute ${className} ${size} bg-[#55b8ff]/30 rounded-full animate-bounce`}
      style={{ animationDelay: Math.random() * 2 + "s" }}
    />
  );
}

export function Hero({
  title1 = "Biznesingiz uchun IT yechimlari",
  title2 = "Tez, sifatli va innovatsion!",
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-[#55b8ff]/15 via-transparent to-[#5d75a5]/15" />

      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          gradient="bg-gradient-to-r from-[#55b8ff]/30 to-[#5d75a5]/20"
          className="left-[-10%] top-[20%] rotate-12"
        />
        <FloatingShape
          gradient="bg-gradient-to-r from-[#5d75a5]/30 to-[#55b8ff]/20"
          className="right-[-5%] top-[70%] -rotate-12"
        />
        <FloatingShape
          gradient="bg-gradient-to-r from-[#55b8ff]/25 to-[#5d75a5]/15"
          className="left-[10%] bottom-[10%] -rotate-6"
        />
        <FloatingShape
          gradient="bg-gradient-to-r from-[#5d75a5]/25 to-[#55b8ff]/15"
          className="right-[20%] top-[15%] rotate-12"
        />

        <DecorativeCircle className="left-[15%] top-[30%]" />
        <DecorativeCircle className="right-[25%] top-[40%]" size="w-3 h-3" />
        <DecorativeCircle className="left-[70%] top-[60%]" size="w-2 h-2" />
        <DecorativeCircle className="right-[15%] bottom-[30%]" />
        <DecorativeCircle className="left-[30%] bottom-[20%]" size="w-5 h-5" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5d75a5] via-[#55b8ff] to-[#5d75a5] animate-pulse">
              {title1}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#5d75a5]/80 mb-8 leading-relaxed font-medium tracking-wide max-w-2xl mx-auto px-4">
            {title2}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#55b8ff]/20">
              <div className="w-2 h-2 bg-[#55b8ff] rounded-full"></div>
              <span className="text-[#5d75a5] font-medium">
                Professional jamoa
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#55b8ff]/20">
              <div className="w-2 h-2 bg-[#55b8ff] rounded-full"></div>
              <span className="text-[#5d75a5] font-medium">
                24/7 qo'llab-quvvatlash
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#55b8ff]/20">
              <div className="w-2 h-2 bg-[#55b8ff] rounded-full"></div>
              <span className="text-[#5d75a5] font-medium">
                Zamonaviy texnologiyalar
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/services" className="inline-block">
              <button className="px-8 py-4 bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] hover:from-[#5d75a5] hover:to-[#55b8ff] text-white rounded-xl border border-[#55b8ff] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="font-semibold">Xizmat kerakmi?</span>
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
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </button>
            </Link>
            <a href="tel:+998900021462" className="inline-block">
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-[#55b8ff]/10 text-[#5d75a5] rounded-xl border-2 border-[#5d75a5] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="font-semibold">Bog'lanish</span>
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 via-transparent to-white/30 pointer-events-none" />
    </div>
  );
}
