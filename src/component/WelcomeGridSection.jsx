import aquaYogaImg from "../assets/images/IMG_6585.PNG";
import aquaYogaImg2 from "../assets/images/yoga1.jpeg";
import aquaYogaImg3 from "../assets/images/xonghoi.png";
import aquaYogaImg4 from "../assets/images/IMG_6577.PNG";
import aquaYogaImg5 from "../assets/images/IMG_6590.PNG";
import aquaYogaImg6 from "../assets/images/tee.jpg";

const WelcomeGridSection = () => {
  const features = [
    "Free Weights",
    "Cardio Machines",
    "Group Exercise Classes",
    "Personal Training",
    "Spin",
    "Yoga"
  ];

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-xl font-bold mb-4">NHỮNG DỊCH VỤ CỐT LÕI</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        Chu du muôn nẻo vận động – giữ dáng khỏe, giữ hồn vui.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* {features.map((f, i) => (
          <div key={i} className="h-32 bg-gray-400 rounded-lg flex items-center justify-center text-white font-semibold">
            {f}
          </div>
        ))} */}
       <div
          className="h-32 rounded-lg relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${aquaYogaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Lớp phủ mờ giống hình bạn gửi */}
          <div className="absolute inset-0 bg-gray-500/70"></div>

          {/* Text đè lên */}
          <span className="relative z-10 text-white font-semibold text-lg">
            Aqua Yoga
          </span>
        </div>

        <div
          className="h-32 rounded-lg relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${aquaYogaImg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Lớp phủ mờ giống hình bạn gửi */}
          <div className="absolute inset-0 bg-gray-500/70"></div>

          {/* Text đè lên */}
          <span className="relative z-10 text-white font-semibold text-lg">
            Thiền Dưới Nước
          </span>
        </div>

        <div
          className="h-32 rounded-lg relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${aquaYogaImg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Lớp phủ mờ giống hình bạn gửi */}
          <div className="absolute inset-0 bg-gray-500/70"></div>

          {/* Text đè lên */}
          <span className="relative z-10 text-white font-semibold text-lg">
           Xông Hơi Thảo Mộc
          </span>
        </div>

        <div
          className="h-32 rounded-lg relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${aquaYogaImg4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Lớp phủ mờ giống hình bạn gửi */}
          <div className="absolute inset-0 bg-gray-500/70"></div>

          {/* Text đè lên */}
          <span className="relative z-10 text-white font-semibold text-lg">
           Breathwork & Mindfulness
          </span>
        </div>

        <div
          className="h-32 rounded-lg relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${aquaYogaImg5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Lớp phủ mờ giống hình bạn gửi */}
          <div className="absolute inset-0 bg-gray-500/70"></div>

          {/* Text đè lên */}
          <span className="relative z-10 text-white font-semibold text-lg">
            Yoga & Mobility
          </span>
        </div>

        <div
          className="h-32 rounded-lg relative overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: `url(${aquaYogaImg6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Lớp phủ mờ giống hình bạn gửi */}
          <div className="absolute inset-0 bg-gray-500/70"></div>

          {/* Text đè lên */}
          <span className="relative z-10 text-white font-semibold text-lg">
           Trà thảo mộc thư giãn
          </span>
        </div>
      </div>
    </section>
  );
};

export default WelcomeGridSection;
