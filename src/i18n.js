import i18n from 'i18next';
// import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  // .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // debug: true,
  });

export default i18n;
