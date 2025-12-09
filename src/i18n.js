import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import vi from './public/locales/vi/translation.json';
import en from './public/locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi }
    },

    lng: "vi",           // default language
    fallbackLng: "vi",

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
