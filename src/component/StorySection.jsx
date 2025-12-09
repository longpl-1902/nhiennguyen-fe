import video2 from "../assets/images/video2.mp4";
const StorySection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

      <video autoPlay muted loop src={video2} className="w-auto h-auto rounded-lg"></video>

      <div>
        <h3 className="text-xl font-bold mb-3">CÂU CHUYỆN CỦA CHÚNG TÔI</h3>
        <h2 className="text-3xl font-bold mb-4">HÀNH TRÌNH CỦA TĨNH – “Từ những bộn bề đến sự bình yên"</h2>
        <p className="text-gray-600 leading-relaxed">
          Câu chuyện của TĨNH bắt đầu từ một câu hỏi rất giản dị: “Làm sao để việc chữa lành trở nên nhẹ nhàng và an toàn—như khi ta được nước ôm lấy?” 
          Chúng tôi nhận ra nước có khả năng làm dịu thần kinh, mềm nhũn căng cứng và mở ra không gian cho cảm xúc được lắng lại. </p>
      </div>

    </section>
  );
};

export default StorySection;
