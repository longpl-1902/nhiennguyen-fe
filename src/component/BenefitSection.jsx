import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import backgroundImg from "../assets/images/formbackground.jpg";

const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = t("schedule_page.benefits", { returnObjects: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-16 flex flex-col md:flex-row gap-12 items-start justify-center">
      
      {/* Benefits List */}
      <div className="w-full md:w-1/2 m-auto">
        <h2 className="text-2xl font-semibold mb-6">
          {t("schedule_page.benefit_title")}
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      {/* Form */}
      <div style={{
            backgroundImage: `url(${backgroundImg})`,
            
          }}
          className="relative w-full md:w-1/2 p-8 rounded-lg shadow bg-cover bg-center overflow-hidden">
            {/* Overlay làm tối + mờ */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
  <div className="relative z-10 text-white">
    {/* Nội dung của bạn ở đây */}
    <h3 className="text-white text-center text-lg font-semibold mb-6">
          {t("schedule_page.form_title")}
        </h3>

        <form className="space-y-4" onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("schedule_page.form_name_placeholder")}
                className="text-white w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <input
                type="email"
                name="email"
                placeholder={t("schedule_page.form_email_placeholder")}
                value={formData.email}
                onChange={handleChange}
                className="text-white w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <input
                type="tel"
                name="phone"
                placeholder={t("schedule_page.form_phone_placeholder")}
                value={formData.phone}
                onChange={handleChange}
                className="text-white w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <input
                type="text"
                name="address"
                placeholder={t("schedule_page.form_preferred_address_placeholder")}
                value={formData.address}
                onChange={handleChange}
                className="text-white w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />

              <textarea
                name="message"
                placeholder={t("schedule_page.form_message")}
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="text-white w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>

              <button
                type="submit"
                className="text-white w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                {t("schedule_page.cta_button")}
              </button>
            </form>
      </div>
        
      </div>

    </section>
  );
};

export default BenefitsSection;
