import React, { useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import NavbarMobileMenu from "./component/NavbarMobileMenu";
import Redirector from "./component/Redirector";
import Links from "./component/Links";
import ServiceCards from "./component/ServiceCards";
import links from "./data/linksData";
import { useLanguage } from "./context/LanguageContext";

import "./Modal.css";

const searchableText = (item, lang) =>
  [
    item.label,
    item.translations?.ar,
    item.translations?.he,
    item.translations?.en,
    item.keywords,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

function Home() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const matches = useMemo(() => {
    const value = q.trim().toLowerCase();
    if (!value) return [];
    return links.filter((item) => searchableText(item, lang).includes(value));
  }, [q, lang]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (matches.length > 0) navigate(`/go/${matches[0].slug}`);
  };

  return (
    <main className="home-main">
      <div className="search-card">
        <form className="search-row" onSubmit={onSubmit} role="search" aria-label={t.search}>
          <input
            type="search"
            className="search-input"
            placeholder={t.placeholder}
            value={q}
            onChange={(event) => setQ(event.target.value)}
          />

          <button className="search-button" type="submit" disabled={!q.trim()}>
            {t.search}
          </button>

          {q && (
            <button type="button" className="clear-button" onClick={() => setQ("")}>
              {t.clear}
            </button>
          )}
        </form>

        {q && matches.length === 0 && <div className="search-hint">{t.noResults}</div>}
      </div>

      <div className="container py-4">
        <ServiceCards />
        <Links />
      </div>
    </main>
  );
}

export default function App() {
  const { lang, t } = useLanguage();

  return (
    <div
      id="top"
      dir={lang === "en" ? "ltr" : "rtl"}
      className="bg-light"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavbarMobileMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/go/:slug" element={<Redirector />} />
      </Routes>

      <footer className="mt-auto text-center py-3 bg-white border-top">
        <a
          href="https://nagimbsher.github.io/support/privacy-policy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.privacy}
        </a>
      </footer>
    </div>
  );
}
