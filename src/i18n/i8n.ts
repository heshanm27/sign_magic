import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locals/en.json';
import si from './locals/si.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const lanuageResources = {
  en: {
    translation: en,
  },
  si: {
    translation: si,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
    lng: 'en', 
    fallbackLng: 'en',
    resources: lanuageResources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
