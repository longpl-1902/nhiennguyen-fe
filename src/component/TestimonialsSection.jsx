import { useTranslation } from "react-i18next";
import avatar1 from "../assets/images/avt1.jpg";
import avatar2 from "../assets/images/avt2.jpg";
import avatar3 from "../assets/images/avt3.jpg";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 px-6 md:px-16 text-center">
      <h3 className="font-semibold mb-10 tracking-wide">
        {t("home_page.title3")}
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
          <div
            className="bg-gray-100 w-72 p-6 rounded-xl text-left shadow-sm"
          >
            <img src={avatar1} className="w-12 h-12 rounded-full bg-gray-300 mb-4"></img>
            <p className="text-sm text-gray-700 mb-3">
              TĨNH mang đến cảm giác rất khác — nhẹ nhàng, sâu lắng và cực kỳ thư giãn. Sau mỗi buổi tập mình thấy tinh thần cân bằng hơn rất nhiều.
            </p>
            <p className="text-sm font-semibold text-gray-900">Minh & An</p>
          </div>

           <div
            className="bg-gray-100 w-72 p-6 rounded-xl text-left shadow-sm"
          >
            <img src={avatar2} className="w-12 h-12 rounded-full bg-gray-300 mb-4"></img>
            <p className="text-sm text-gray-700 mb-3">
              Không gian nước ấm kết hợp thiền thật sự giúp mình ngủ ngon hơn và giảm căng thẳng rõ rệt sau giờ làm.
            </p>
            <p className="text-sm font-semibold text-gray-900">Chị Thảo</p>
          </div>

           <div
            className="bg-gray-100 w-72 p-6 rounded-xl text-left shadow-sm"
          >
            <img src={avatar3} className="w-12 h-12 rounded-full bg-gray-300 mb-4"></img>
            <p className="text-sm text-gray-700 mb-3">
             Lần đầu thử Aqua Yoga mà mình bất ngờ vì cơ thể nhẹ hẳn sau buổi tập. Rất đáng để trải nghiệm.
            </p>
            <p className="text-sm font-semibold text-gray-900">Thu Thảo</p>
          </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
