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

export function Hero({
  title1 = "IT-решения для вашего бизнеса",
  title2 = "Быстро, качественно, инновационно!",
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-[#55b8ff]/10 via-transparent to-[#5d75a5]/10" />

      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          gradient="bg-gradient-to-r from-[#55b8ff]/50 to-[#5d75a5]"
          className="left-[-10%] top-[20%] rotate-12"
        />
        <FloatingShape
          gradient="bg-gradient-to-r from-[#5d75a5]/50 to-[#55b8ff]"
          className="right-[-5%] top-[70%] -rotate-12"
        />
        <FloatingShape
          gradient="bg-gradient-to-r from-[#55b8ff]/55 to-[#5d75a5]"
          className="left-[10%] bottom-[10%] -rotate-6"
        />
        <FloatingShape
          gradient="bg-gradient-to-r from-[#5d75a5]/55 to-[#55b8ff]"
          className="right-[20%] top-[15%] rotate-12"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5d75a5] via-[#55b8ff] to-[#5d75a5]">
              {title1}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
            {title2}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/services" className="inline-block">
              <button className="px-6 py-3 bg-[#55b8ff] hover:bg-[#5d75a5] text-white rounded-lg border border-[#55b8ff] transition-colors duration-200 flex items-center gap-2">
                Нужен Сервис?
                <svg
                  className="w-4 h-4"
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
              <button className="px-6 py-3 bg-transparent hover:bg-[#55b8ff]/10 text-[#5d75a5] rounded-lg border border-[#5d75a5] transition-colors duration-200 flex items-center gap-2">
                Связаться
                <svg
                  className="w-4 h-4"
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

      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-gray-50/80 pointer-events-none" />
    </div>
  );
}
