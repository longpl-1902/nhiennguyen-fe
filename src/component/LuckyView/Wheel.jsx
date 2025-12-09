import React, { useState } from "react";
import { motion } from "framer-motion";
import Wheel from "../../assets/images/spinning.png"

const prizes = [
  { label: "25% Voucher", img: "/images/25.png" },
  { label: "01 bình nước Tĩnh", img: "/images/bottle.png" },
  { label: "iPhone 15 Pro Max", img: "/images/iphone.png" },
  { label: "10% Voucher", img: "/images/10.png" },
  { label: "01 bộ trà thiền", img: "/images/tea.png" },
  { label: "01 tháng membership", img: "/images/month.png" },
  { label: "01 túi tote Tĩnh", img: "/images/tote.png" },
  { label: "01 ngày membership", img: "/images/day.png" }
];

export default function LuckyWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * prizes.length);
    const sliceDeg = 360 / prizes.length;

    // quay 5 vòng + dừng đúng vào ô random
    const newRotation = 360 * 5 + (360 - randomIndex * sliceDeg);

    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(prizes[randomIndex].label);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center py-10 space-y-6">

      {/* Vòng quay */}
      <div className="relative w-[380px] h-[380px]">

        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="w-full h-full rounded-full overflow-hidden border-[10px] border-gray-200 shadow-2xl"
          style={{
            backgroundImage: "url('/images/wheel.png')",
            backgroundSize: "cover"
          }}
        />

        {/* Kim chỉ */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <img src={Wheel} className="w-10" />
        </div>

        {/* Nút quay */}
        <button
          onClick={spin}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-white text-blue-700 font-semibold w-20 h-20 
                     rounded-full shadow-xl border-4 border-blue-500
                     hover:scale-105 transition">
          QUAY
        </button>
      </div>

      {/* Kết quả */}
      {result && (
        <div className="text-xl font-bold text-center">
          🎉 Bạn đã trúng: <span className="text-blue-600">{result}</span> 🎉
        </div>
      )}
    </div>
  );
}