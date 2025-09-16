import React from 'react';
import { Link } from 'react-router-dom';
import links from '../data/linksData';
import '../App.css';

export default function ServiceCards() {
  // ✅ your WhatsApp number (no +)
  const WHATSAPP = '972545946241';

  const payForMe = (item) => {
    const text =
`مرحبًا، أريد خدمة التقديم:
• الخدمة: ${item.label}
• السعر: 250 ₪
أوافق أن تتولى التقديم عني.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };

  const groups = [
    { id: 'gov',   title: 'خدمات حكومية' },
    { id: 'visas', title: 'تأشيرات' },
  ];

  return (
    <div id="services" className="cards-container" dir="rtl">
      {groups.map(g => {
        const items = links.filter(l => l.group === g.id);
        if (!items.length) return null;
        return (
          <section key={g.id} className="cards-section">
            <h3 className="cards-section-title">{g.title}</h3>
            <div className="cards-grid">
              {items.map(item => (
                <article className="service-card" key={item.slug}>
                  <h4 className="service-title">{item.label}</h4>
                  <p className="service-desc">
                    إذا أردت أن أقدّمها لك بسعر ثابت <strong>250 ₪</strong> اضغط الزر الأسود،
                    أو اضغط الزر الأبيض للتقديم بنفسك مجانًا عبر الموقع الرسمي.
                  </p>
                  <div className="card-actions">
                    <Link className="btn-ghost" to={`/go/${item.slug}`}>
                      قدّم بنفسك (مجّانًا)
                    </Link>
                    <button className="btn-apple" onClick={() => payForMe(item)}>
                       أقدّمها لك — 250 ₪
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
