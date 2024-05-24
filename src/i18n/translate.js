import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lang: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          hola: "HELLO, I'M",
          fran: "FRANCISCO",
        },
      },
      es: {
        translation: {
          hola: "HOLA, YO",
          fran: "SOY FRAN",
        },
      },
    },
/*     interpolation: {
      escapeValue: false,
    }, */
  });