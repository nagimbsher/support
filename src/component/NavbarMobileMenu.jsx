import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import links from "../data/linksData";
import { useLanguage } from "../context/LanguageContext";
import "../App.css";

const getLabel = (item, lang) => item.translations?.[lang] || item.label;

export default function NavbarMobileMenu() {
  const { lang, switchLang, t } = useLanguage();

  const closeOffcanvas = () => {
    const element = document.getElementById("mainMenu");
    const bootstrap = window.bootstrap;

    if (element && bootstrap?.Offcanvas) {
      (bootstrap.Offcanvas.getInstance(element) ||
        new bootstrap.Offcanvas(element)).hide();
    }
  };

  const gov = links.filter((item) => item.group === "gov");
  const visas = links.filter((item) => item.group === "visas");

  const MenuItem = ({ to, children }) => (
    <Link
      className="list-group-item list-group-item-action text-start"
      to={to}
      onClick={closeOffcanvas}
    >
      {children}
    </Link>
  );

  const handleLanguage = (code) => {
    switchLang(code);
    closeOffcanvas();
  };

  return (
    <nav className="navbar navbar-light bg-white border-bottom sticky-top" dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FontAwesomeIcon icon={faHandshake} className="brand-icon" />
          <span className="fw-semibold">{t.brand}</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mainMenu"
          aria-controls="mainMenu"
          aria-label={t.menu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="mainMenu"
          aria-labelledby="mainMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mainMenuLabel">
              {t.menu}
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label={t.close}
            />
          </div>

          <div className="offcanvas-body">
            <div className="small text-muted mb-2">{t.government}</div>
            <div className="list-group list-group-flush">
              {gov.map((item) => (
                <MenuItem key={item.slug} to={`/go/${item.slug}`}>
                  {getLabel(item, lang)}
                </MenuItem>
              ))}
            </div>

            <div className="small text-muted mt-4 mb-2">{t.visas}</div>
            <div className="list-group list-group-flush">
              {visas.map((item) => (
                <MenuItem key={item.slug} to={`/go/${item.slug}`}>
                  {getLabel(item, lang)}
                </MenuItem>
              ))}
            </div>

            <div className="small text-muted mt-4 mb-2">{t.language}</div>
            <div className="d-flex gap-2 px-3">
              {[
                ["ar", "AR"],
                ["he", "HE"],
                ["en", "EN"],
              ].map(([code, label]) => (
                <button
                  key={code}
                  type="button"
                  className={`btn btn-sm ${lang === code ? "btn-warning" : "btn-outline-secondary"}`}
                  onClick={() => handleLanguage(code)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
