import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("vi");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "vi" ? "en" : "vi"));
    
  };

  const flagSrc =
    language === "vi"
      ? "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
      : "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";

  const label = language === "vi" ? "Vietnamese" : "English";

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
      onClick={toggleLanguage}
      title={`Switch to ${language === "vi" ? "English" : "Vietnamese"}`}
    >
      <img
        src={flagSrc}
        alt={`${label} Flag`}
        className="w-6 h-4 rounded-sm border"
      />
    </div>
  );
};

export default LanguageSwitcher;
