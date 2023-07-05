import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en-GB.json";

const resources = {
  en: { translation: en },
};

export const i18 = i18next.use(initReactI18next).init({
  lng: "en",
  keySeparator: false,
  interpolation: { escapeValue: false },
  resources,
});
