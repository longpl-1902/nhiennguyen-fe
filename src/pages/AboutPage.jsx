import HeroSection2 from "../component/HeroSection2.jsx";
import HappinessGuarantee from "../component/HapinessGuarantee.jsx";
import MissionSection from "../component/MissionSection.jsx";
import FarmFreshQuality from "../component/FarmFreshQuality.jsx";
import DifferenceSection from "../component/DifferenceSection.jsx";
import StorySection from "../component/StorySection.jsx";
import ProductListSection from "../component/ProductListSection.jsx";

const AboutPage = () => {
  return (
    <div className="w-full bg-gray-50">
      <HeroSection2 />
      <HappinessGuarantee />
      <MissionSection />
      {/* <FarmFreshQuality /> */}
      <DifferenceSection />
      <StorySection />
      {/* <ProductListSection /> */}
    </div>
  );
};

export default AboutPage;
