import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "es",
    resources: {
      en: {
        translation: {
          hola: "HOLA, YO",
          fran: "SOY FRAN",
          description: {
            title:
              "<1>Desarrollador de software</1>, apasionado por la tecnología y <1>motivado por ayudar</1> y crecer profesionalmente.",
          },
        },
      },
      es: {
        translation: {
          hola: "HOLA, YO",
          fran: "SOY FRAN",
          description: {
            title:
              "<1>Desarrollador de software</1>, apasionado por la tecnología y <1>motivado por ayudar</1> y crecer profesionalmente.",
          },
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
