import React from "react";
import { Link } from "react-router-dom";
import links from "../data/linksData";
import { useLanguage } from "../context/LanguageContext";
import "../App.css";

const WHATSAPP = "972545946241";

const getLabel = (item, lang) => item.translations?.[lang] || item.label;

const replaceText = (text, values) =>
  Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    text
  );

export default function ServiceCards() {
  const { lang, t } = useLanguage();

  const payForMe = (item) => {
    const service = getLabel(item, lang);
    const text = replaceText(t.applyWhatsApp, {
      service,
      price: t.price,
    });

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const groups = [
    { id: "gov", title: t.government },
    { id: "visas", title: t.visas },
  ];

  return (
    <div id="services" className="cards-container">
      {groups.map((group) => {
        const items = links.filter((item) => item.group === group.id);
        if (!items.length) return null;

        return (
          <section key={group.id} className="cards-section">
            <h3 className="cards-section-title">{group.title}</h3>

            <div className="cards-grid">
              {items.map((item) => (
                <article className="service-card" key={item.slug}>
                  <h4 className="service-title">{getLabel(item, lang)}</h4>

                  <p className="service-desc">
                    {replaceText(t.serviceDescription, { price: t.price })}
                  </p>

                  <div className="card-actions">
                    <Link className="btn-ghost" to={`/go/${item.slug}`}>
                      {t.applyYourself}
                    </Link>

                    <button
                      type="button"
                      className="btn-apple"
                      onClick={() => payForMe(item)}
                    >
                      {t.applyForYou} · {t.price}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
