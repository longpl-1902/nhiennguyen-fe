import { useTranslation } from "react-i18next";

const video3 = "https://tinh-wellness-video.s3.ap-southeast-2.amazonaws.com/videos/video3.mp4";

const HeroSection2 = () => {
  const {t} = useTranslation();

  return (
    <section className="w-full py-16 px-6">
      <div className="mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <video src={video3} autoPlay loop muted className="w-360 h-auto bg-gray-300 rounded-lg flex items-center justify-center">
        </video>

        {/* Right Text */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {t("about_page.title1")}
          </h1>
          <p className="text-gray-600 leading-relaxed">
            {t("about_page.description1_line1")}
            <br />
            {t("about_page.description1_line2")}
            <br />
            {t("about_page.description1_line3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
