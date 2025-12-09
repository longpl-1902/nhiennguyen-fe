// apiData.js
export const prizes = [
    { id: 1, label: "Voucher giảm 25%", color: "#f87171", bgClass: "bg-red-400", rotationOffset: -12.5, imageUrl: "img/voucher_25.png" },
    { id: 2, label: "01 ngày membership", color: "#60a5fa", bgClass: "bg-blue-400", rotationOffset: 37.5, imageUrl: "img/member_day.png" },
    { id: 3, label: "01 túi tote Tinh", color: "#cbd5e1", bgClass: "bg-gray-300", rotationOffset: 87.5, imageUrl: "img/tote.png" },
    { id: 4, label: "01 tháng membership", color: "#60a5fa", bgClass: "bg-blue-600", rotationOffset: 137.5, imageUrl: "img/member_month.png" },
    { id: 5, label: "01 bộ quà tặng", color: "#fcd34d", bgClass: "bg-yellow-400", rotationOffset: 187.5, imageUrl: "img/gift_set.png" },
    { id: 6, label: "Voucher giảm 10%", color: "#ef4444", bgClass: "bg-red-600", rotationOffset: 237.5, imageUrl: "img/voucher_10.png" },
    { id: 7, label: "01 Iphone 17 Pro Max", color: "#f97316", bgClass: "bg-orange-500", rotationOffset: 287.5, imageUrl: "img/iphone.png" },
    { id: 8, label: "01 bình nước Tinh", color: "#94a3b8", bgClass: "bg-slate-400", rotationOffset: 337.5, imageUrl: "img/bottle.png" },
];

export const TOTAL_SLICES = prizes.length;
export const SLICE_ANGLE = 360 / TOTAL_SLICES;