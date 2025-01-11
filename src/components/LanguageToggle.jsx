import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  // Check the current language
  const currentLanguage = i18n.language;

  // Toggle between English and Swedish
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "se" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button type="button" onClick={toggleLanguage}>
      {currentLanguage === "en" ? (
        <ReactCountryFlag
          countryCode="SE"
          style={{ width: "3em", height: "3em" }}
          svg
        />
      ) : (
        <ReactCountryFlag
          countryCode="GB"
          style={{ width: "3em", height: "3em" }}
          svg
        />
      )}
    </button>
  );
};

export default LanguageToggle;
