import React from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className="w-full bg-[#F8F3F3] pb-6 rounded-lg shadow-sm">
      {/* Image */}
      <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>

      {/* Title */}
      <p className="text-center text-gray-600 tracking-[0.2em] text-sm mt-6">
        {title}
      </p>

      {/* Button */}
      <button className="w-full border border-black py-2 mt-6 hover:bg-black hover:text-white transition">
        Check it out
      </button>
    </div>
  );
};

export default ProductCard;
