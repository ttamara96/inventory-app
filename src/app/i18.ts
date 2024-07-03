import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from  './_resources/i18n-en.json';
import translationHU from  './_resources/i18n-hu.json';


const resources = {
  en: {
    translation: translationEN
  },
  hu: {
    translation: translationHU
  }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: resources,
        fallbackLng: "en",
        debug: true
    });

export default i18n;