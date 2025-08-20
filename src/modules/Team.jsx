import { fetcher } from "../middlewares/Fetcher";
import useSWR from "swr";

export const Team = () => {
  const { data, error, isLoading } = useSWR(`/team`, fetcher);

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#55b8ff] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5d75a5] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#55b8ff] opacity-3 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 py-16 lg:py-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#55b8ff] bg-opacity-10 px-6 py-3 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#55b8ff] rounded-full animate-pulse"></div>
            <span className="text-[#5d75a5] font-semibold text-sm uppercase tracking-wider">
              Bizning jamoa
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#5d75a5] mb-6 leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] bg-clip-text text-transparent">
              Mutaxassislar
            </span>
          </h1>

          <p className="text-xl text-[#5d75a5] opacity-70 max-w-3xl mx-auto leading-relaxed">
            Har bir loyihani muvaffaqiyatli amalga oshirish uchun tajribali va
            kreativ mutaxassislar jamoasi bilan ishlaydi
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-3xl p-10 text-center">
              <div className="w-20 h-20 bg-red-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-3">
                Xatolik yuz berdi
              </h3>
              <p className="text-red-500 opacity-80">
                Jamoa ma'lumotlarini yuklashda muammo bo'ldi
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-pulse">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 mx-auto"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 bg-gray-200 rounded-lg w-2/3 mx-auto"></div>
                    <div className="flex justify-center gap-2 mt-6">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : data && data?.length <= 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-[#55b8ff] to-[#5d75a5] rounded-3xl flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#55b8ff] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">0</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#5d75a5] mb-4">
              Jamoa a'zolari topilmadi
            </h3>
            <p className="text-[#5d75a5] opacity-60 text-lg">
              Hozircha jamoa ma'lumotlari mavjud emas
            </p>
          </div>
        ) : (
          /* Team Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data &&
              data.map((worker, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#55b8ff] hover:border-opacity-30 transition-all duration-500 transform hover:-translate-y-3">
                    {/* Member Photo */}
                    <div className="relative mb-8">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto bg-gradient-to-br from-[#55b8ff] to-[#5d75a5] p-1">
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                          <img
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            src={worker.image || "/placeholder.svg"}
                            alt={worker.name}
                          />
                        </div>
                      </div>
                      {/* Status indicator */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#55b8ff] rounded-full flex items-center justify-center group-hover:bg-[#5d75a5] transition-colors duration-300">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-[#5d75a5] mb-2 group-hover:text-[#55b8ff] transition-colors duration-300">
                        {worker.name}
                      </h3>
                      <p className="text-[#5d75a5] opacity-70 font-medium mb-6 text-sm">
                        {worker.job}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Team Stats */}
        {data && data.length > 0 && (
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#55b8ff] mb-1">
                  {data.length}+
                </div>
                <div className="text-[#5d75a5] opacity-70 text-sm font-medium">
                  Mutaxassislar
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#55b8ff] mb-1">
                  100+
                </div>
                <div className="text-[#5d75a5] opacity-70 text-sm font-medium">
                  Loyihalar
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#55b8ff] mb-1">5+</div>
                <div className="text-[#5d75a5] opacity-70 text-sm font-medium">
                  Yillik tajriba
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
