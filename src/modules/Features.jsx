import React from "react";
import img1 from "../assets/features/1.png";
import img2 from "../assets/features/2.png";
import img3 from "../assets/features/3.png";
import img4 from "../assets/features/4.png";
import img5 from "../assets/features/5.png";
import img6 from "../assets/features/6.png";

export const Features = () => {
  const cards = [
    {
      title: "Tajribali mentorlar",
      decription:
        "Har bir mentor dars o’tish va loyihalar ustida ishlashda yetarlicha tajribaga ega.",
      icon: img1,
    },
    {
      title: "30% nazariy, 70% amaliy",
      decription:
        "Darslar nazariy va amaliy tarzda olib boriladi. Amaliy ish bajarish - nazariy o’rganishga nisbatan ko’proq tashkil etilgan.",
      icon: img2,
    },
    {
      title: "Individual yordam",
      decription:
        "O’rganish mobaynida yuzaga keladigan savollar, qiyinchiliklarda mentorlardan yordam olish va muammoni bartaraf etish mumkin.",
      icon: img3,
    },
    {
      title: "Jamoa bo‘lib ishlash",
      decription:
        "Kurs davomida guruhlardagi o’rganuvchilar jamoaviy muhitda bir-birlari bilan fikr va tajriba almashishlari mumkin.",
      icon: img4,
    },
    {
      title: "Ish topish uchun konsultatsiya",
      decription:
        "Kurslarni yakunlagach ish topish va frilansda ishlash uchun mentorlardan 1 oy davomida tushuncha va yordam olish imkoniyati mavjud. ",
      icon: img5,
    },
    {
      title: "Sertifikat",
      decription:
        "Kurslarni muvaffaqiyatli tugatgan o’quvchilar sertifikat bilan taqdirlanadilar.",
      icon: img6,
    },
  ];

  return (
    <section id="features" className="px-4">
      <div className="container py-20">
        <h1 className="text-center my-10 lg:my-20 text-3xl md:text-5xl font-bold text-[#5D75A5]">
          Bizning afzalliklarimiz
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              className="p-5 md:p-10 rounded-2xl transition-all hover:scale-[1.05]"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl">{card.title}</h3>
                <img src={card.icon} alt={card.title} />
              </div>
              <p className="mt-4">{card.decription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
