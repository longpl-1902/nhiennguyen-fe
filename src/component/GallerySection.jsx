import { useTranslation } from "react-i18next";
import hoom from "../assets/images/hoom.png";
import hoom1 from "../assets/images/hoom1.jpg";
import hoom2 from "../assets/images/hoom2.jpg";
import hoom3 from "../assets/images/hoom3.png";
import hoom4 from "../assets/images/hoom4.PNG";

const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-6 md:px-16 py-16 text-center">
      <h2 className="font-semibold text-lg mb-8 tracking-wide">
        {t("home_page.title2")} 
      </h2>

      <div className="w-full max-w-5xl mx-auto">
        <img src={hoom} className="w-full h-120 bg-gray-300 rounded-lg mb-6"></img>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img src={hoom1} className="w-60 h-35 bg-gray-200 h-24 rounded-lg"></img>
          <img src={hoom2} className="w-60 h-35 bg-gray-200 h-24 rounded-lg"></img>
          <img src={hoom3} className="w-60 h-35 bg-gray-200 h-24 rounded-lg"></img>
          <img src={hoom4} className="w-60 h-35 bg-gray-200 h-24 rounded-lg"></img>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {/* {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
