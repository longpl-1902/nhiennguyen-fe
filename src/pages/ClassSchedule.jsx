import BenefitsSection from "../component/BenefitSection";
import ScheduleTable from "../component/ScheduleTable";

const Home = () => (
  <div className="flex flex-col items-center bg-gray-50 text-gray-900">
    <BenefitsSection />
    <ScheduleTable />
  </div>
);

export default Home;