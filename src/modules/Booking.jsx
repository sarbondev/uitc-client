import { useState } from "react";
import BookingSvg from "../assets/booking/1.svg";

export const Booking = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    contact: "",
    course: "none",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#55b8ff] via-[#9AD2FB] to-[#EFF6FF]"></div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#5d75a5]/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/15 rounded-full blur-md"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl p-8 lg:p-16 gap-12 rounded-3xl">
          <div className="flex flex-col gap-8 justify-center items-center text-center">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#5d75a5] leading-tight">
                Bizga qo'shiling!
              </h1>
              <p className="text-[#5d75a5]/80 text-lg">
                Kelajakni biz bilan birga quring
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#55b8ff]/20 rounded-full blur-2xl scale-110"></div>
              <img
                src={BookingSvg}
                alt="Students learning"
                className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#5d75a5]">
                Ro'yxatdan o'ting
              </h2>
              <p className="text-[#5d75a5]/70">
                Ma'lumotlaringizni kiriting va biz siz bilan bog'lanamiz
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#55b8ff] focus:border-[#55b8ff] transition-all duration-300 placeholder-[#5d75a5]/60"
                  placeholder="Ismingiz va familiyangizni kiriting"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#55b8ff] focus:border-[#55b8ff] transition-all duration-300 placeholder-[#5d75a5]/60"
                  placeholder="Telefon raqamingizni kiriting"
                  required
                />
              </div>

              <div className="relative">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#55b8ff] focus:border-[#55b8ff] transition-all duration-300 text-[#5d75a5]"
                  required
                >
                  <option value="none" disabled>
                    Yo'nalishni tanlang
                  </option>
                  <option value="web-development">Veb dasturlash</option>
                  <option value="3d-modeling">3D modeling</option>
                  <option value="graphic-design">Grafik dizayn</option>
                  <option value="ai-development">Sun'iy intellekt</option>
                  <option value="marketing">Digital marketing</option>
                  <option value="smm">SMM</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#55b8ff] hover:bg-[#5d75a5] text-white font-semibold text-lg py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border border-[#55b8ff] hover:border-[#5d75a5]"
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
