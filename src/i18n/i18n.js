import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";


i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        preload: ["fa"],
        fallbackLng: "fa",
        debug: process.env.NODE_ENV === "development",
        detection: {
            order: ["localStorage"],
            lookupLocalStorage: "language",
            caches: ["localStorage"],
        },
        backend: {
            loadPath: process.env.PUBLIC_URL+'/locales/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
