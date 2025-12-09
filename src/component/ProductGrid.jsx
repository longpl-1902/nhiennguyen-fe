import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <ProductCard
          key={index}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
