import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import links from '../data/linksData';

export default function Redirector() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const map = useMemo(() => {
    const m = {};
    links.forEach(l => { m[l.slug] = l.url; });
    return m;
  }, []);

  useEffect(() => {
    const target = map[slug];
    if (target) {
      // Same-tab navigation avoids popup blockers
      window.location.replace(target);
    } else {
      navigate('/', { replace: true });
    }
  }, [slug, map, navigate]);

  return (
    <div className="container py-5 text-center">
      <div className="spinner-border" role="status" aria-hidden="true" />
      <div className="mt-3">جارٍ الفتح…</div>
      {/* Fallback click if something blocks */}
      <noscript>
        <p>
          تم تعطيل الجافاسكريبت. افتح الرابط يدوياً:
          <a href={map[slug] || '/'}>هنا</a>
        </p>
      </noscript>
    </div>
  );
}
