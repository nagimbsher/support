import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import links from "../data/linksData";
import { useLanguage } from "../context/LanguageContext";

export default function Redirector() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const map = useMemo(() => {
    const result = {};
    links.forEach((item) => {
      result[item.slug] = item.url;
    });
    return result;
  }, []);

  useEffect(() => {
    const target = map[slug];
    if (target) {
      window.location.replace(target);
    } else {
      navigate("/", { replace: true });
    }
  }, [slug, map, navigate]);

  return (
    <div className="container py-5 text-center">
      <div className="spinner-border" role="status" aria-hidden="true" />
      <div className="mt-3">{t.opening}</div>
      <noscript>
        <p>
          {t.javascriptDisabled} <a href={map[slug] || "/"}>{t.manualLink}</a>
        </p>
      </noscript>
    </div>
  );
}
