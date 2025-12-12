import React, { useEffect, useState } from "react";

const DAY_MAP = {
  1: "Thứ 2",
  2: "Thứ 3",
  3: "Thứ 4",
  4: "Thứ 5",
  5: "Thứ 6",
  6: "Thứ 7",
  7: "Chủ Nhật",
};

const TIME_MAP = {
  1: "05:00 - 06:30",
  2: "06:45 - 08:15",
  3: "08:30 - 10:00",
  4: "10:15 - 11:45",
  5: "13:45 - 15:15",
  6: "15:30 - 17:00",
  7: "17:15 - 18:45",
  8: "19:00 - 20:45",
};

export default function ScheduleTable() {
  const [classes, setClasses] = useState([]);

  const API = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API}api/classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(classes);

  // Prepare empty grouped table [time][day] = array of classes
  const grouped = {};
  Object.keys(TIME_MAP).forEach((time) => {
    grouped[time] = {};
    Object.keys(DAY_MAP).forEach((day) => {
      grouped[time][day] = [];
    });
  });

  // Fill grouped structure
  classes.forEach((cls) => {
      const { date, time } = cls.schedule;
      // Create the nested object if missing
      if (!grouped[time]) grouped[time] = {};
      if (!grouped[time][date]) grouped[time][date] = [];
      grouped[time][date].push(cls);
  });

  return (
    <div className="w-full p-4">
      <h2 className="text-center text-3xl font-bold text-[#0a4c4a] mb-6">
        • LỊCH HỌC DỰ KIẾN •
      </h2>

      <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#1e9c89] to-[#0a746e]">

        {/* HEADER */}
        <div className="grid grid-cols-8 bg-[#1da886] text-white font-semibold text-lg">
          <div className="py-3 text-center bg-[#178f73]">Ca</div>

          {Object.entries(DAY_MAP).map(([day, name]) => (
            <div
              key={day}
              className="py-3 text-center border-r border-white/20"
            >
              {name}
            </div>
          ))}
        </div>

        {/* BODY */}
        {Object.entries(TIME_MAP).map(([timeKey, timeLabel]) => (
          <div key={timeKey} className="grid grid-cols-8 border-b border-white/20">

            {/* TIME COLUMN */}
            <div className="py-4 px-2 text-center text-[#ffef95] font-bold border-r border-white/20">
              {timeLabel}
            </div>

            {/* DAYS */}
            {Object.keys(DAY_MAP).map((dayKey) => {
              const list = grouped[timeKey][dayKey]; // array of classes

              return (
                <div key={dayKey} className="px-3 py-4 min-h-[90px] space-y-2 border-r border-white/20">

                  {list.length > 0 ? (
                        list.map((cls, index) => (
                            <div
                            key={cls.id}
                            className={`flex justify-between pb-2 ${
                                index !== list.length - 1 ? "border-b border-white/20" : ""
                            }`}
                            >
                            <p className="text-[#ffef7a] font-bold text-sm">
                                {cls.teacher}
                            </p>
                            <p className="text-white text-xs opacity-80">
                                {cls.number}/{cls.slot}
                            </p>
                            </div>
                        ))
                        ) : (
                        <div className="h-8" />
                        )}


                </div>
              );
            })}
          </div>
        ))}

      </div>
    </div>
  );
}
