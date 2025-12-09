import { useState } from "react";
import Wheel from "./Wheel";

export function getRandomItem(arr) {
  if (!arr || arr.length === 0) return null;

  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export default function LuckyWheelModal({ vouchers, onClose }) {
  const [rotation, setRotation] = useState(0);
  const [selected, setSelected] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    const choice = getRandomItem(vouchers);
    setSelected(null);

    const index = vouchers.findIndex((v) => v.id === choice.id);
    const sliceAngle = 360 / vouchers.length;

    // góc để dừng VÀO đúng miếng
    const target = 360 * 7 + (360 - index * sliceAngle - sliceAngle / 2);

    setRotation(target);

    // chờ animation kết thúc
    setTimeout(() => {
      setSelected(choice);
      setSpinning(false);
    }, 4200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selected.name);
    alert("Đã copy mã: " + selected.name);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 rounded-xl relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl"
        >
          ✖
        </button>

        <h2 className="text-center font-bold text-xl mb-4">Vòng Quay May Mắn</h2>

        <div className="flex justify-center items-center w-full mt-4">
           {/* MŨI TÊN CHỈ */}
        <div className="absolute top-[61px] 
    z-[1000] w-0 h-0 
                        border-l-[10px] border-r-[10px] border-b-[18px] 
                        border-l-transparent border-r-transparent border-b-pink-600 
                        drop-shadow-lg rotate-180">
        </div>

          <Wheel vouchers={vouchers}/>
        </div>


        <div className="mt-6 text-center">
          <button
            onClick={spin}
            disabled={spinning}
            className="px-6 py-2 bg-pink-600 text-white rounded-lg shadow"
          >
            {spinning ? "Đang quay..." : "Quay"}
          </button>
        </div>

        {selected && (
          <div className="mt-6 text-center">
            <p className="font-bold text-lg text-green-600">
              Bạn trúng: {selected.description}
            </p>
            <p className="text-2xl font-bold text-pink-500 mt-1">
              {selected.description}
            </p>
            <p className="text-sm mt-1 opacity-80">
              Giảm giá: {selected.discount}%
            </p>

            <button
              onClick={handleCopy}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Copy mã
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
