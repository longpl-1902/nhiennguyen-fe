export const defaultPrizes = [
  { id: 0, text: '01 tháng\nmembership', name: "01MEMBERSHIP", bgColor: '#6B93A8', textColor: '#FFFFFF', hasCard: true, probability: 20 },
  { id: 1, text: 'Voucher\ngiảm 25%', name: "25MEMBERSHIP", bgColor: '#F5F5DC', textColor: '#DC143C', hasStamp: true, probability: 5 },
  { id: 2, text: '01 chai\nnước Tinh', name: "1CHAINUOC", bgColor: '#6B93A8', textColor: '#FFFFFF', hasBottle: true, probability: 25 },
  { id: 3, text: 'Voucher\ngiảm 10%', name: "VOUCHER10", bgColor: '#F5F5DC', textColor: '#DC143C', hasStamp2: true, probability: 15 },
  { id: 4, text: '01 bộ trà\nthảo mộc', name: "1THAOMOC", bgColor: '#6B93A8', textColor: '#FFFFFF', hasGift: true, probability: 10 },
  { id: 5, text: '01 tháng\nmembership', name: "01MEMBERSHIP", bgColor: '#F5F5DC', textColor: '#DC143C', hasCard2: true, probability: 8 },
  { id: 6, text: '01 túi\nTò Te Tĩnh', name: "1TOTETINH", bgColor: '#6B93A8', textColor: '#FFFFFF', hasBag: true, probability: 16 },
  { id: 7, text: '01 Iphone\n17 ProMax', name: "1IPHONE17", bgColor: '#F5F5DC', textColor: '#DC143C', hasCard3: true, probability: 8 },
];

/* =========================
   GET PRIZES
========================= */
export const getPrizes = () => {
  if (typeof window === 'undefined') return defaultPrizes;
  return defaultPrizes;
};

/* =========================
   ✅ RANDOM BY PROBABILITY (ĐÃ SỬA LỖI)
========================= */
export const getRandomPrize = (prizes) => {   // ✅ BẮT BUỘC NHẬN THAM SỐ
  const totalProbability = prizes.reduce(
    (sum, prize) => sum + prize.probability,
    0
  );

  const random = Math.random() * totalProbability;

  let cumulative = 0;
  for (const prize of prizes) {
    cumulative += prize.probability;
    if (random <= cumulative) {
      console.log('Selected Prize:', prize);
      return prize;
    }
  }

  return prizes[0];
};
