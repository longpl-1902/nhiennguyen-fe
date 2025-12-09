import { useTranslation } from "react-i18next";

const HappinessGuarantee = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-6 text-center bg-white">
      <h2 className="text-xl font-semibold mb-4">
          {t("about_page.title2")}</h2>

      <div className="bg-[#D6E9F6] max-w-xl mx-auto p-6 rounded-xl">
        <p className="text-gray-600 mb-4">
          {t("about_page.description2_line1")}
          <br />
          {t("about_page.description2_line2")}
          <br />
          {t("about_page.description2_line3")}
        </p>

        <button className="bg-[#360185] px-6 py-2 text-white rounded-full">
          Tìm hiểu thêm
        </button>
      </div>
    </section>
  );
};

export default HappinessGuarantee;
