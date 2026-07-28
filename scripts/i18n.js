import { translations } from "./translations.js";

let currentLang = localStorage.getItem("lang") || "en";

applyLanguage(currentLang);

document
  .getElementById("lang-toggle")
  .addEventListener("click", toggleLanguage);

function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";

  applyLanguage(currentLang);

  localStorage.setItem("lang", currentLang);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    element.textContent = translations[lang][key];
  });

  document.getElementById("lang-toggle").textContent =
    lang === "en" ? "ES" : "EN";
}
