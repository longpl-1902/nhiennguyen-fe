import video1 from "../assets/images/video1.mp4";

const MissionSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-center">
          <h3 className="font-semibold mb-2 text-center">
            Điều tạo nên sự khác biệt
          </h3>
          <p className="text-gray-600 text-center">
            1. Nhiệt độ 32–34°C, pha muối biển nhẹ, kết hợp hệ thống âm thanh dưới nước giúp bạn thả lỏng sâu toàn thân.
            <br />
            2. TĨNH tập trung vào khôi phục, thả lỏng và kết nối tâm – thân, thay vì cường độ hay kỹ thuật nặng.
            <br />
            3. Toàn bộ đội ngũ được đào tạo chuyên sâu về aqua therapy, thiền, breathwork và phục hồi cơ thể.
          </p>
        </div>


        <video src={video1} autoPlay muted loop className="bg-gray-300 h-auto w-auto rounded-lg"></video>
      </div>
    </section>
  );
};

export default MissionSection;
