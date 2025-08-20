import { Link } from "react-router-dom";

export const About = () => {
  const stats = [
    { number: "100+", label: "Mutaxassislar" },
    { number: "2022", label: "Tashkil etilgan" },
    { number: "50+", label: "Loyihalar" },
    { number: "10+", label: "Yo'nalishlar" },
  ];

  const services = [
    {
      title: "Backend Development",
      description: "Server tomonidagi dasturlash va API yaratish",
      icon: "⚙️",
    },
    {
      title: "Frontend Development",
      description: "Foydalanuvchi interfeysi va veb-dizayn",
      icon: "🎨",
    },
    {
      title: "Mobile Development",
      description: "iOS va Android ilovalar yaratish",
      icon: "📱",
    },
    {
      title: "QA Testing",
      description: "Sifat nazorati va testlash xizmatlari",
      icon: "🔍",
    },
    {
      title: "Analytics",
      description: "Ma'lumotlar tahlili va hisobotlar",
      icon: "📊",
    },
    {
      title: "Marketing",
      description: "Raqamli marketing va SMM xizmatlari",
      icon: "📈",
    },
  ];

  const values = [
    {
      title: "Innovatsiya",
      description: "Eng so'nggi texnologiyalar va yondashuvlardan foydalanish",
    },
    {
      title: "Jamoaviylik",
      description: "Kuchli jamoa va hamkorlik muhitini yaratish",
    },
    {
      title: "Sifat",
      description: "Xalqaro standartlarga javob beradigan mahsulotlar yaratish",
    },
    {
      title: "Rivojlanish",
      description: "Doimiy o'rganish va professional o'sish",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#55b8ff] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#5d75a5] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#5d75a5] mb-6">
              United IT Clubs
            </h1>
            <p className="text-xl text-[#5d75a5]/80 max-w-2xl mx-auto leading-relaxed">
              O'zbekistonning IT sohasidagi xalqaro standartlarga javob
              beradigan jamoani shakllantirish va yosh dasturchilarga
              professional imkoniyatlar yaratish
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#55b8ff]/20 hover:border-[#55b8ff]/40 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#55b8ff] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#5d75a5] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#5d75a5] mb-6">
              Bizning Yo'nalishlarimiz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-[#55b8ff]/20 hover:border-[#55b8ff]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5d75a5] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5d75a5]/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#5d75a5] mb-6">
              Bizning Qadriyatlarimiz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#55b8ff] to-[#5d75a5] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-[#55b8ff]/20 hover:border-[#55b8ff]/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#55b8ff] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#5d75a5] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#55b8ff] to-[#5d75a5]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bizga Qo'shiling!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional jamoamizning bir qismi bo'ling va IT sohasida o'z
            karyerangizni boshlang yoki rivojlantiring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white text-[#5d75a5] font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              Loyihalarni Ko'rish
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#5d75a5] transition-all duration-300">
              Bog'lanish
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
