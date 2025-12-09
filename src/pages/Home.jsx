import HeroSection from "../component/HeroSection";
import GallerySection from "../component/GallerySection";
import TestimonialsSection from "../component/TestimonialsSection";
import CallToAction from "../component/CallToAction";
import { useState, useEffect } from "react";
import { FaGift } from "react-icons/fa";
import LuckyWheel from "../component/LuckyView/Wheel";

const Home = () => {
   // Modal mở/đóng
  const [open, setOpen] = useState(false);

  // Voucher từ API
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_BASE_URL;

  console.log("API URL:", API);
  useEffect(() => {
      fetch(`${API}api/vouchers`)
        .then((res) => res.json())
        .then((data) => setVouchers(data))
        .catch((err) => console.error("Error loading vouchers:", err))
        .finally(() => setLoading(false));
    }, []);


    console.log(vouchers);
  if (loading) return null;

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-900">
      <HeroSection />
      <GallerySection />
      <TestimonialsSection />
      <CallToAction />

      {/* ICON mở Lucky Wheel */}
    <div
      className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-red-600 transition"
      onClick={() => setOpen(true)}
    >
      <FaGift size={30} />
    </div>

    {/* Modal LuckyWheel */}
     {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60]">
          {/* Nút Đóng (Close Button) */}
          {/* <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-200 z-[70]"
          >
            <FaTimes size={30} />
          </button> */}
          
          {/* Component Vòng Quay */}
          <div className="p-8 bg-white rounded-lg shadow-2xl relative">
             <LuckyWheel />
          </div>
        </div>
      )}
      {/* <div className="h-12" /> */}
    </div>
  );
};

export default Home;
