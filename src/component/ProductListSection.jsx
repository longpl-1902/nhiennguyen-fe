const ProductListSection = () => {
  const products = [
    "SUN RAY", "AUTUMN", "COTTON POP", "SNOW"
  ];

  return (
    <section className="px-6 py-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((p, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-4 text-center">
            <div className="h-32 bg-gray-300 rounded mb-4"></div>
            <p className="text-sm font-medium mb-2">{p}</p>
            <p className="text-gray-600 text-sm">$29.99</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
