import React, { use } from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/images/home.PNG";
import homeImage1 from "../assets/images/IMG_6577.PNG";
import { useTranslation } from "react-i18next";
import backgroundImg from "../assets/images/aa.jpg";


export default function HeroSection() {
  const {t} = useTranslation();

  return (
    <section
  style={{
    backgroundImage: `url(${backgroundImg})`,
  }}
  className="relative w-screen py-20 flex flex-col justify-center items-center 
             text-center px-6 overflow-hidden shadow bg-cover bg-center"
>
  {/* Overlay làm tối + mờ nền */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

  {/* Nội dung */}
  <div className="relative z-10 text-white">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      {t("home_page.title1")}
      <br />
      {t("home_page.slogan")}
    </h1>

    <p className="text-gray-200 mb-8">
      {t("home_page.slogan_description")}
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/class-schedule"
        className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
      >
        {t("home_page.button1")}
      </a>

      <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
        View Templates
      </button>
    </div>

    {/* Hero images */}
    <div className="flex justify-center mt-16 relative">
      <img src={homeImage1} className="w-72 h-48 rounded-lg" />
      <img src={homeImage} className="w-72 h-48 rounded-lg -ml-10 translate-y-8" />
    </div>
  </div>
</section>

  );
}

