import jobImg from "../assets/images/jobpage1.jpg";
import jobImg2 from "../assets/images/IMG_6578.PNG";
import jobImg3 from "../assets/images/IMG_6589.PNG";
const DifferenceSection = () => {
  const items = [
    "Farm-Fresh Quality",
    "Sustainably Sourced",
    "Raised to Last"
  ];

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-xl font-bold mb-8">Sự khác biệt của chúng tôi</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div>
            <img src={jobImg} className="h-48 w-90 bg-gray-300 rounded-lg mb-4"></img>
            <p className="font-medium text-gray-700">HỒ NƯỚC ẤM TRỊ LIỆU CHUẨN QUỐC TẾ KHÔNG CLO</p>
          </div>
          <div>
            <img src={jobImg2} className="h-auto w-auto bg-gray-300 rounded-lg mb-4"></img>
            <p className="font-medium text-gray-700">TRẢI NGHIỆM CHỮA LÀNH – KHÔNG PHẢI “BÀI TẬP”</p>
          </div>
          <div>
            <img src={jobImg3} className="h-auto w-auto bg-gray-300 rounded-lg mb-4"></img>
            <p className="font-medium text-gray-700">GIẢNG VIÊN CHUYÊN MÔN VỀ TRỊ LIỆU NƯỚC & MINDFULNESS</p>
          </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
