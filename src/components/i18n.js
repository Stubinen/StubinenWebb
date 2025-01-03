import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../translations/en.json';
import se from '../translations/se.json';

i18n.use(initReactI18next).use(LanguageDetector).init({
    resources: {
      en: { translation: en },
      se: { translation: se },
    },
    //lng: 'se', // Default language
    fallbackLng: 'se', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });
  
  export default i18n;