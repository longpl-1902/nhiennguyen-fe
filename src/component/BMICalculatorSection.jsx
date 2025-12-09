const BMICalculatorSection = () => (
  <section className="py-16 px-6 bg-white text-center">
    <h2 className="text-2xl font-bold mb-4">CALCULATE YOUR BMI</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
      Use this simple calculator to estimate your body mass index.
    </p>

    <div className="max-w-xl mx-auto space-y-4">
      <div className="h-48 bg-gray-300 rounded-lg"></div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-200 p-3 rounded">Age</div>
        <div className="bg-gray-200 p-3 rounded">Height</div>
        <div className="bg-gray-200 p-3 rounded">Weight</div>
        <div className="bg-gray-200 p-3 rounded">Calculate</div>
      </div>
    </div>
  </section>
);

export default BMICalculatorSection;
