import React from "react";
import AboutCarousel from "../component/ServiceCarousel.jsx";
import ProductGrid from "../component/ProductGrid.jsx";
import { useTranslation } from "react-i18next";
import WelcomeGridSection from "../component/WelcomeGridSection.jsx";

const AboutUs = () => {
    const items = [
    { title: "Aqua Yoga", image: "" },
    { title: "Thiền Dưới Nước", image: "" },
    { title: "Xông Hơi Thảo Mộc", image: "" },
    { title: "Breathwork & Mindfulness", image: "" },
    { title: "Yoga & Mobility", image: "" },
    { title: "Trà thảo mộc thư giãn", image: "" }
  ];

  const {t} = useTranslation();
  return (
    <section className="w-full px-6 md:px-16 py-16">
      <AboutCarousel />

      {/* Grid Items Section */}
      <div>
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {t("services.benefit_title")}
        </h2> */}

        {/* <ProductGrid items={items} /> */}
      </div>
      
      <WelcomeGridSection />
    </section>
  );
};

export default AboutUs;