import React, { useState , useEffect, useRef} from "react";
import MemberImg from "../../assets/images/member.png";
import PotImg from "../../assets/images/pot.png";
import TeaImg from "../../assets/images/tea.png";
import BagImg from "../../assets/images/bag.png";
import card10Img from "../../assets/images/10card.png";
import card25Img from "../../assets/images/25card.png";
import { getPrizes, getRandomPrize } from "../../models/prizes";

export default function LuckyWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [prizes, setPrizes] = useState([]);

  const winningRef = useRef(null);

  useEffect(() => {
    setPrizes(getPrizes());
  }, []);

  const spinWheel = () => {
    if (isSpinning || prizes.length <= 1) return;

    setIsSpinning(true);
    setResult(null);

    const winningPrize = getRandomPrize(prizes);
    winningRef.current = winningPrize;

    const winningIndex = prizes.findIndex((p) => p.id === winningPrize.id);

    const startOffset = -90;
    const segmentAngle = 360 / prizes.length;

    const segmentCenter =
      startOffset + segmentAngle * winningIndex + segmentAngle / 2;

    const targetAngle = -segmentCenter;

    const normalizedTarget = ((targetAngle % 360) + 360) % 360;

    const totalRotation = 4 * 360 + normalizedTarget;

    setRotation(totalRotation);

    console.log(winningPrize);
  };

  if (prizes.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-white text-xl">Đang tải...</div>
      </div>
    );
  }

  const startOffset = -90;
  const segmentAngle = 360 / prizes.length;

  return (
    <div>
        <div className="relative flex items-center justify-center mb-8">

          {/* Pointer */}
          <div className="absolute z-30" style={{ top: "-60px" }}>
            <div className="w-16 h-24 relative">
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: "30px solid transparent",
                  borderRight: "30px solid transparent",
                  borderTop: "40px solid #5a6872",
                }}
              ></div>
            </div>
          </div>

          {/* Wheel */}
          <div className="relative" style={{ width: "500px", height: "500px" }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-2xl"></div>

            <div
              className="absolute rounded-full bg-white shadow-inner"
              style={{ inset: "12px" }}
            ></div>

            {/* SEGMENTS */}
            <div
              className="absolute rounded-full overflow-hidden transition-transform ease-out"
              style={{
                inset: "20px",
                transform: `rotate(${rotation}deg)`,
                transitionDuration: "3000ms",
                transitionTimingFunction:
                  "cubic-bezier(0.17, 0.67, 0.12, 0.99)",
              }}
              onTransitionEnd={() => {
                setIsSpinning(false);
                setResult(winningRef.current);
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                className="w-full h-full absolute inset-0"
              >
                {prizes.map((prize, index) => {
                  const angle =
                    (startOffset + segmentAngle * index) * (Math.PI / 180);
                  const nextAngle =
                    (startOffset + segmentAngle * (index + 1)) *
                    (Math.PI / 180);

                  const x1 = 100 + 100 * Math.cos(angle);
                  const y1 = 100 + 100 * Math.sin(angle);
                  const x2 = 100 + 100 * Math.cos(nextAngle);
                  const y2 = 100 + 100 * Math.sin(nextAngle);

                  const largeArcFlag = segmentAngle > 180 ? 1 : 0;
                  const pathData = `M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                  return (
                    <path
                      key={prize.id}
                      d={pathData}
                      fill={prize.bgColor}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  );
                })}
              </svg>
            </div>

            {/* TEXT + ICONS */}
            <div
              className="absolute rounded-full pointer-events-none transition-transform ease-out"
              style={{
                inset: "20px",
                transform: `rotate(${rotation}deg)`,
                transitionDuration: "3000ms",
                transitionTimingFunction:
                  "cubic-bezier(0.17, 0.67, 0.12, 0.99)",
              }}
            >
              {prizes.map((prize, index) => {
                const midAngle =
                  startOffset +
                  segmentAngle * index +
                  segmentAngle / 2;

                return (
                  <div
                    key={prize.id}
                    className="absolute w-full h-full"
                    style={{
                      transform: `rotate(${midAngle}deg)`,
                      transformOrigin: "center center",
                    }}
                  >
                    <div
                      className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center"
                      style={{ marginTop: "45px" }}
                    >
                      <div className="mb-2 flex items-center justify-center">
                        {prize.hasCard && (
                          <img src={MemberImg} alt="" width={50} height={50} />
                        )}
                        {prize.hasStamp && (
                          <img src={card25Img} alt="" width={50} height={50} />
                        )}
                        {prize.hasBottle && (
                          <img src={PotImg} alt="" width={50} height={50} />
                        )}
                        {prize.hasStamp2 && (
                          <img src={card10Img} alt="" width={50} height={50} />
                        )}
                        {prize.hasCard2 && (
                          <img src={MemberImg} alt="" width={50} height={50} />
                        )}
                        {prize.hasCard3 && (
                          <img src={card10Img} alt="" width={50} height={50} />
                        )}
                        {prize.hasBag && (
                          <img src={BagImg} alt="" width={50} height={50} />
                        )}
                        {prize.hasGift && (
                          <img src={TeaImg} alt="" width={50} height={50} />
                        )}
                      </div>

                      <div
                        className="text-center font-bold leading-tight px-2"
                        style={{
                          color: prize.textColor,
                          fontSize: "11px",
                          maxWidth: "90px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {prize.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-24 h-24 bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 
              rounded-full shadow-2xl border-4 border-slate-400 flex items-center justify-center z-10"
            ></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center mb-6 flex gap-4 justify-center">
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className="px-12 py-4 bg-gradient-to-r from-blue-500 to-blue-600 
              text-white font-bold text-xl rounded-full shadow-xl 
              hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 
              disabled:to-gray-500 disabled:cursor-not-allowed transform 
              hover:scale-105 transition-all duration-200"
          >
            {isSpinning ? "ĐANG QUAY..." : "QUAY NGAY!"}
          </button>

          <button
            onClick={() => {
              setRotation(0);
              setResult(null);
            }}
            disabled={isSpinning}
            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 
              text-white font-bold text-xl rounded-full shadow-xl 
              hover:from-gray-700 hover:to-gray-800 disabled:from-gray-400 
              disabled:to-gray-500 disabled:cursor-not-allowed transform 
              hover:scale-105 transition-all duration-200"
          >
            ĐẶT LẠI
          </button>
        </div>

        {/* RESULT */}
        {result && !isSpinning && (
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              🎉 CHÚC MỪNG! 🎉
            </h2>
            <p className="text-xl font-semibold text-slate-800">
              Bạn đã trúng:{" "}
              <span className="text-red-600">
                {result.text.replace("\n", " ")}
              </span>
              <br />
              Mã Giảm giá: {""}
              <span className="text-red-600">
                {result.name.replace("\n", " ")}
              </span>
            </p>
          </div>
        )}
      </div>  
  );
}