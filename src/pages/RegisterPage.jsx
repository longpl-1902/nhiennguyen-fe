import React, { useState, useMemo, useEffect } from "react";
import { data } from "react-router-dom";

export const DATE_MAP = {
  1: "Thứ 2",
  2: "Thứ 3",
  3: "Thứ 4",
  4: "Thứ 5",
  5: "Thứ 6",
  6: "Thứ 7",
  7: "Chủ nhật",
};

export const TIME_MAP = {
  1: "Ca 1",
  2: "Ca 2",
  3: "Ca 3",
  4: "Ca 4",
  5: "Ca 5",
  6: "Ca 6",
  7: "Ca 7",
  8: "Ca 8",
};

export default function ServicePackageCheckout() {
 const [packages, setPackages] = useState([]);
 const [loading, setLoading] = useState(true);
 const [courses, setCourses] = useState([]);
 const [course, setCourse] = useState("");
 const [courseId, setCourseId] = useState("");
 const [description, setDescription] = useState("");

 const API = import.meta.env.VITE_API_BASE_URL;

 useEffect(() => {
      fetch(`${API}api/classes`)
        .then((res) => res.json())
        .then((data) => setCourses(data))
        .catch((err) => console.error("Error loading courses:", err))
        .finally(() => setLoading(false));
    }, []);

  useEffect(() => {
      fetch(`${API}api/packages`)
        .then((res) => res.json())
        .then((data) => setPackages(data))
        .catch((err) => console.error("Error loading packages:", err))
        .finally(() => setLoading(false));
    }, []);

  const [showQr, setShowQr] = useState(false);
  const [qrUrl, setQrUrl] = useState(null);
  const [voucher, setVoucher] = useState("");
  const [voucherStatus, setVoucherStatus] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(0);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [note, setNote] = useState("");

  const [errors, setErrors] = useState({});

  const activePackages = packages;

  const [selectedId, setSelectedId] = useState(null);

  const [matrix, setMatrix] = useState({});
  const [selected, setSelected] = useState([]);

  const buildMatrix = (apiData) => {
    const matrix = {};

    for (let d = 1; d <= 7; d++) {
      for (let t = 1; t <= 8; t++) {
        matrix[`${d}-${t}`] = null;
      }
    }

    apiData.forEach((item) => {
      const key = `${item.schedule.date}-${item.schedule.time}`;
      matrix[key] = item;
    });

    return matrix;
  };

  useEffect(() => {
  if (courses.length > 0) {
    setMatrix(buildMatrix(courses));
  }
  }, [courses]);

  const toggleSelect = (slot) => {
    const exists = selected.find((x) => x.id === slot.id);
    
    if (exists) {
      setSelected(selected.filter((x) => x.id !== slot.id));
    } 
    else {
      if (selected.length >= 3) {
        alert("Bạn chỉ được chọn tối đa 3 ca!");
        return;
      }
      setSelected([...selected, slot]);
    }
  };

  useEffect(() => {
    if (activePackages.length > 0 && !selectedId) {
      setSelectedId(activePackages[0].id);
    }
  }, [activePackages]);

  const selectedPackage = useMemo(
    () => activePackages.find((p) => p.id === selectedId),
    [selectedId, activePackages]
  );

  const price = Number(selectedPackage?.price ?? 0);
  const discountAmount = Math.round((price * discountPercent) / 100);
  const total = price - discountAmount;

  const formatCurrency = (vnd) =>
    Number(vnd).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

  const applyVoucher = async () => {
    console.log(voucher);
    if (!voucher.trim()) {
      setVoucherStatus("error");
      setDiscountPercent(0);
      return;
    }

    const code = voucher.trim().toUpperCase();

    try {
      setVoucherStatus(null); // reset state

      const res = await fetch(`${API}api/vouchers/search?name=${code}`);
      console.log(res);
      if (!res.ok) {
        setVoucherStatus("error");
        setDiscountPercent(0);
        return;
      }

      const data = await res.json();

      if (!data) {
        setVoucherStatus("error");
        setDiscountPercent(0);
        return;
      }

      console.log("Voucher:", data);

      setDiscountPercent(data.discount); // ✅ from API
      setVoucherStatus("success");
      setDescription(data.description);
    } catch (err) {
      console.error("Error loading voucher:", err);
      setVoucherStatus("error");
      setDiscountPercent(0);
    }
  };


  const validate = () => {
    const e = {};
    if (!fullName) e.fullName = "Vui lòng nhập họ tên";
    if (!email) e.email = "Vui lòng nhập email";
    if (!phone) e.phone = "Vui lòng nhập số điện thoại";
    if (selected.length == 0) e.course = "Vui lòng chọn khóa học";

    console.log(e);
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const hanleTransfer = async () => {
  setShowQr(false);

  // ✅ LẤY ID KHÓA HỌC
  const selectedCourseId = selected.map(item => item.id);

  console.log(selectedCourseId);

  console.log("Selected Course ID:", selectedCourseId);
  console.log("Selected Package ID:", selectedPackage.id);

  const payload = {
    name: fullName,
    PhoneNumeber: phone,   // ✅ đúng field theo Swagger
    email: email,
    classIds : selectedCourseId,
    address: "string",   // bạn có thể thay bằng address thật
    isActive: 0,
  };

  console.log("POST PAYLOAD:", payload);

  try {
    const res = await fetch(
      `${API}api/students/${selectedPackage.id}`, // ✅ đúng path
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    console.log(res.ok);

    if (!res.ok) {
      console.log("run this");
      throw new Error("POST request failed");
    }
    console.log("POST SUCCESS:", data);
    alert("✅ Cảm ơn bạn đã tham gia khóa học của chúng tôi, hệ thống đã được cập nhật.");
  } catch (err) {
    console.error("POST ERROR:", err);
    alert("❌ Gửi dữ liệu thất bại. Vui lòng thử lại.");
  }
};

  const handleSubmit = () => {
    if (!validate()) {
      console.log("Validation failed");
      return;
    }
    if (!selectedPackage) {
      console.log("No package selected");
      return;
    }

    // ✅ FAKE QR THEO SỐ TIỀN
    const fakeQr = `https://img.vietqr.io/image/970422-0932123456-compact.png?amount=${total}&addInfo=Thanh%20toan%20${selectedPackage.name}`;

    setQrUrl(fakeQr);
    setShowQr(true);
  };


  return (
    <div className="min-h-screen bg-[#F7F7F7] flex justify-center px-4 py-8">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="rounded-2xl bg-white shadow-sm border border-gray-100 mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h1 className="text-xl md:text-2xl font-semibold text-[#0F6F63]">
              Đăng ký gói dịch vụ
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Hãy chọn gói phù hợp và hoàn tất thông tin để đến trang thanh toán.
            </p>
          </div>
          <div className="px-6 py-3 bg-[#E8F7F4] rounded-b-2xl text-sm">
            💬 Hiện có <b>14 người</b> đang xem các gói này – đăng ký sớm để giữ chỗ!
          </div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
          <div className="space-y-6">
            {/* Package selection */}
            <section className="rounded-2xl bg-white shadow-sm border p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Chọn gói dịch vụ
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {activePackages.map((pkg) => {
                  const active = pkg.id === selectedId;

                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedId(pkg.id)}
                      className={`relative text-left rounded-2xl border p-4 hover:shadow-md transition ${
                        active
                          ? "border-[#0F6F63] bg-[#E8F7F4]"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                      {pkg.description && (
                        <p className="text-xs text-gray-500 mt-1">
                          {pkg.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-3 text-xs">
                        <span className="px-2 py-1 rounded-full bg-gray-100">
                          ⏱ {pkg.duration} {pkg.durationUnit}
                        </span>
                      </div>

                      <div className="mt-3 flex justify-between items-center">
                        <span className="font-bold text-[#0F6F63] text-base">
                          {formatCurrency(pkg.price)}
                        </span>

                        {active && (
                          <span className="text-xs text-[#0F6F63] flex items-center gap-1">
                            ● Đang chọn
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Voucher */}
            <section className="rounded-2xl bg-white shadow-sm border p-5">
              <h2 className="text-lg font-semibold mb-3">Mã giảm giá</h2>

              <div className="flex gap-3 flex-col sm:flex-row">
                <input
                  className="flex-1 rounded-full border px-4 py-2"
                  placeholder="Nhập mã (ví dụ AQUA20)"
                  value={voucher}
                  onChange={(e) => {
                    setVoucher(e.target.value);
                    setVoucherStatus(null);
                  }}
                />
                <button
                  onClick={applyVoucher}
                  className="rounded-full px-6 py-2 bg-[#0F6F63] text-white hover:opacity-90"
                >
                  Áp dụng
                </button>
              </div>

              {voucherStatus === "success" && (
                <div className="mt-2 text-xs px-3 py-1 rounded-full bg-[#E8F7F4] text-[#0F6F63] inline-block">
                  ✔ Mã hợp lệ giảm {discountPercent}% - {description}
                </div>
              )}
              {voucherStatus === "error" && (
                <div className="mt-2 text-xs px-3 py-1 rounded-full bg-red-50 text-red-600 inline-block">
                  ✖ Mã không hợp lệ
                </div>
              )}
            </section>

            <div className="w-full overflow-x-auto border rounded-2xl p-5 bg-white shadow">

      {/* HEADER */}
      <div className="grid grid-cols-8 text-center font-bold mb-2">
        <div></div>
        {Object.values(DATE_MAP).map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* MATRIX */}
      {Object.entries(TIME_MAP).map(([timeKey, timeLabel]) => (
        <div key={timeKey} className="grid grid-cols-8 text-center">
          {/* CA LABEL */}
          <div className="font-semibold py-2">{timeLabel}</div>

          {Object.keys(DATE_MAP).map((dayKey) => {
            const slot = matrix[`${dayKey}-${timeKey}`];
            const isFull = slot && slot.slot - slot.number <= 0;
            const isSelected = slot && selected.some((s) => s.id === slot.id);

            return (
              <div
                key={`${dayKey}-${timeKey}`}
                onClick={() => {
                  if (!slot || isFull) return;
                  toggleSelect(slot);
                }}
                className={`
                  m-1 rounded-xl border p-2 transition-all cursor-pointer text-xs
                  ${slot ? "bg-gray-50 hover:scale-105" : "bg-gray-100"}
                  ${isSelected ? "border-green-600 bg-green-200 scale-105" : ""}
                  ${isFull ? "bg-red-200 border-red-500 cursor-not-allowed opacity-50" : ""}
                `}
              >
                {slot ? (
                  <>
                    <div className="font-semibold">{slot.teacher}</div>
                    <div className="text-[10px]">
                      {DATE_MAP[slot.schedule.date]} - {TIME_MAP[slot.schedule.time]}
                    </div>
                    <div className="text-[10px]">
                      Còn: {slot.slot - slot.number}
                    </div>
                  </>
                ) : (
                  <div className="opacity-30">—</div>
                )}
              </div>
            );
          })}
        </div>
      ))}

      {/* SELECTED */}
      <div className="mt-4 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-semibold mb-2">
          Ca đã chọn ({selected.length}/3)
        </h3>

        {selected.map((s) => (
          <div key={s.id} className="text-sm">
            ✔ {s.teacher} – {DATE_MAP[s.schedule.date]} –{" "}
            {TIME_MAP[s.schedule.time]} – Còn: {s.slot - s.number}
          </div>
        ))}
      </div>
    </div>

            {/* Personal Info */}
            <section className="rounded-2xl bg-white shadow-sm border p-5 space-y-4">
              <h2 className="text-lg font-semibold">Thông tin cá nhân</h2>

              <div>
                <label className="text-xs">Họ và tên *</label>
                <input
                  className="w-full rounded-xl border px-3 py-2 mt-1"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="text-xs">Email *</label>
                <input
                  type="email"
                  className="w-full rounded-xl border px-3 py-2 mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-xs">Số điện thoại *</label>
                <input
                  type="tel"
                  className="w-full rounded-xl border px-3 py-2 mt-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* <div>
                <label className="text-xs">Cơ sở *</label>
                <select
                  className="w-full rounded-xl border px-3 py-2 mt-1"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="">Chọn cơ sở</option>
                  <option>Đà Nẵng – Center</option>
                  <option>Đà Nẵng – Beach</option>
                  <option>Hà Nội</option>
                </select>
                {errors.branch && (
                  <p className="text-xs text-red-500">{errors.branch}</p>
                )}
              </div> */}

              <div>
                <label className="text-xs">Ghi chú</label>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border px-3 py-2 mt-1"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </section>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <section className="rounded-2xl bg-white shadow-sm border p-5">
              <h2 className="text-lg font-semibold mb-4">Tóm tắt đơn hàng</h2>

              {selectedPackage && (
                <div className="rounded-xl bg-[#E8F7F4] p-4 mb-4">
                  <p className="text-sm text-[#0F6F63] font-medium">
                    {selectedPackage.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    ⏱ {selectedPackage.durationInMonths} tháng
                  </p>
                </div>
              )}

              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Giá gốc</span>
                  <span>{formatCurrency(price)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Giảm giá</span>
                  <span className="text-[#0F6F63]">
                    {discountPercent > 0
                      ? `- ${formatCurrency(discountAmount)}`
                      : "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Phần quà</span>
                  <span>{description}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-base font-semibold">
                  <span>Tổng thanh toán</span>
                  <span className="text-[#0F6F63]">{formatCurrency(total)}</span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl bg-white shadow-sm border p-5">
              <button
                onClick={handleSubmit}
                className="w-full rounded-full bg-[#0F6F63] text-white py-3 font-semibold hover:opacity-90"
              >
                ✔ Tiếp tục thanh toán →
              </button>
            </section>
          </div>
        </div>
      </div>

      {showQr && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center shadow-xl border">

      <h2 className="text-lg font-semibold text-[#0F6F63] mb-1">
        Quét mã để thanh toán
      </h2>

      <p className="text-xs text-gray-500 mb-4">
        Vui lòng chuyển khoản đúng số tiền để hệ thống tự động ghi nhận.
      </p>

      {qrUrl && (
        <img
          src={qrUrl}
          alt="QR Thanh toán"
          className="mx-auto w-64 h-64 object-contain rounded-xl border"
        />
      )}

      <div className="mt-4 text-sm space-y-1 text-left bg-[#E8F7F4] p-3 rounded-xl">
        <div className="flex justify-between">
          <span>Số tiền:</span>
          <b className="text-[#0F6F63]">{formatCurrency(total)}</b>
        </div>
        <div className="flex justify-between">
          <span>Nội dung:</span>
          <span className="text-xs">
            TT {selectedPackage?.name}
          </span>
        </div>
      </div>

      <button
        onClick={() => hanleTransfer()}
        className="mt-5 w-full rounded-full border py-2 text-sm hover:bg-gray-50"
      >
        Đóng
      </button>
    </div>
  </div>
)}

    </div>
  );
}
