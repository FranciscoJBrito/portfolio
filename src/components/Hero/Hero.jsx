import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="main_hero_container">
      <h1 className="hero_title">
        {t('hola')}
        <br />
        {t('fran')}<span className="blinking_cursor">|</span>
      </h1>
    </div>
  );
};

export default Hero;
