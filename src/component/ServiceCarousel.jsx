import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import aquaWater from "../assets/images/video2.mp4"

const AboutCarousel = () => {
  const { t } = useTranslation();

  // Lấy dữ liệu JSON
  const slides = t("services.slides", { returnObjects: true }) || [];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const nextSlide = () => {
    setDirection("left");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("right");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[index];

  return (
  <div className="w-full h-[480px] md:h-[550px] relative flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden">
    
    {/* VIDEO BACKGROUND */}
    <video
      src={aquaWater}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* OVERLAY (lớp phủ cho dễ đọc chữ) */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* CONTENT */}
    <div className="relative z-10 w-full flex flex-col items-center justify-center">

      {/* TITLE */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">
        {currentSlide.title}
      </h2>

      {/* CONTENT BOX */}
      <div className="flex justify-center">
        <div
          key={index}
          className={`
            bg-white max-w-3xl w-full p-10 rounded-3xl shadow-xl
            ${direction === "left" ? "animate-slide-left" : "animate-slide-right"}
          `}
        >
          {currentSlide.lines.map((line, i) => (
            <p key={i} className="text-gray-700 text-lg mb-3 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-10 top-1/2 -translate-y-1/2 bg-black/70 text-white p-4 rounded-full z-20"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 -translate-y-1/2 bg-black/70 text-white p-4 rounded-full z-20"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="flex justify-center mt-6 space-x-2 z-20">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => {
              setDirection(i > index ? "left" : "right");
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

    </div>
  </div>
);

};

export default AboutCarousel;
