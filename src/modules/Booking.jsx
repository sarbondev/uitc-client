import React from "react";
import image1 from "../assets/booking/1.svg";

export const Booking = () => {
  return (
    <section id="booking" className="min-h-screen relative grid grid-cols-2">
      <div className="h-full bg-[#9AD2FB]"></div>
      <div className="h-full bg-[#EFF6FF]"></div>
      <div className="grid bg-white bg-opacity-75 backdrop-blur-md grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-[1000px] xl:w-[1200px] p-10 lg:p-20 gap-20 rounded-3xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-2xl font-bold text-[#5D75A5]">
            Bizga qo‘shiling!
          </h1>
          <img src={image1} alt="" />
        </div>
        <form className="flex flex-col justify-evenly gap-10">
          <h1 className="text-lg md:text-xl text-center text-[#5D75A5]">
            Kursga yozilish uchun ma’lumotlaringizni kiriting <br />
            va siz bilan tez fursatda bog'lanamiz
          </h1>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="fullname"
              className="bg-blue-50 shadow-md p-2 rounded-lg outline-none"
              placeholder="Ismingiz va familiyangizni kiriting"
            />
            <input
              type="tel"
              name="contact"
              className="bg-blue-50 shadow-md p-2 rounded-lg outline-none"
              placeholder="Telefon raqamingizni kiriting"
            />
            <select
              name="course"
              className="bg-blue-50 shadow-md p-2 rounded-lg"
            >
              <option value="none">Yo'nalishni tanlang</option>
              <option value="web-development">Veb dasturlash</option>
              <option value="3d-modeling">3D modeling</option>
              <option value="graphic-design">Grafik dizayn</option>
              <option value="ai-development">Sun'iy intellekt</option>
              <option value="marketing">Digital marketing</option>
              <option value="smm">SMM</option>
            </select>
            <button
              type="submit"
              className="text-white bg-[#55B8FF] hover:bg-[#5D75A5] transition-all font-semibold text-[12px] md:text-sm py-2 border hover:border-[#5D75A5] border-[#55B8FF]  px-4 rounded-lg"
            >
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
