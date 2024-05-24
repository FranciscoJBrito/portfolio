import "./Dropdown.css";
import useLangDropdown from "../../hooks/useLangDropdown";
import { icons } from "../../assets/icons";
import i18next from "i18next";

const Dropdown = () => {
  const { open, languages, handleDropdown, changeLanguage } = useLangDropdown();
  return (
    <div className="main-container">
      <div className="switch-btn" onClick={handleDropdown}>
        {i18next.language === "en" ? "EN" : "ES"}
        <i className="lang-icon">{icons.globe}</i>
      </div>
      <div className={open ? "items" : "hidden"}>
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => {changeLanguage(lang.code), handleDropdown()}}
            className="item"
          >
            <div className="icon">{icons[lang.icon]}</div>
            <span>{lang.lang}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
