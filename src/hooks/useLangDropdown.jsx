import { useState } from "react";
import { useTranslation } from "react-i18next";

const useLangDropdown = () => {
  const languages = [
    { code: "es", lang: "Spanish", icon: "esFlag"},
    { code: "en", lang: "English", icon: "enFlag"},
  ];
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return { open, languages, handleDropdown, changeLanguage };
};

export default useLangDropdown;
