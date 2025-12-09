import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import backgroundImg from "../assets/images/background.jpg";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section
  style={{
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="relative w-full py-20 px-6 text-center rounded-lg overflow-hidden"
>
  {/* Overlay làm tối + mờ */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

  {/* Nội dung */}
  <div className="relative z-10 text-white">
    <h3 className="text-xl font-semibold mb-3">
      {t("home_page.title4")}
    </h3>

    <p className="text-gray-200 mb-6">
      {t("home_page.discount")}
    </p>

    <NavLink
      to={"/register"}
      className="bg-white text-black px-10 py-3 rounded-full hover:bg-gray-200 transition"
    >
      {t("home_page.button1")}
    </NavLink>
  </div>
</section>

  );
};

export default CallToAction;
