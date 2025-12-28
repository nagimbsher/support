// // src/App.js
// import React, { useMemo, useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';

// // ✅ use the dropdown navbar (not the off-canvas one)
// import NavbarDropdown from './component/NavbarDropdown';
// import Redirector from './component/Redirector';
// import ServiceCards from './component/ServiceCards';

// import links from './data/linksData';
// import './App.css'; // keep your main styles (or Modal.css if you need it)

// function Home() {
//   const [q, setQ] = useState('');
//   const navigate = useNavigate();

//   const matches = useMemo(() => {
//     const v = q.trim().toLowerCase();
//     if (!v) return [];
//     return links.filter(
//       l =>
//         l.label.toLowerCase().includes(v) ||
//         (l.keywords && l.keywords.toLowerCase().includes(v))
//     );
//   }, [q]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (matches.length > 0) navigate(`/go/${matches[0].slug}`);
//   };

//   return (
//     <main className="home-main">
//       {/* Search */}
//       <div className="search-card">
//         <form className="search-row" onSubmit={onSubmit} role="search" aria-label="بحث عن خدمة">
//           <input
//             type="search"
//             className="search-input"
//             placeholder="ابحث عن خدمة (مثال: رخصة، جواز، إثيوبيا…)"
//             value={q}
//             onChange={(e) => setQ(e.target.value)}
//           />
//           <button className="search-button" type="submit" disabled={!q.trim()}>
//             بحث
//           </button>
//           {q && (
//             <button type="button" className="clear-button" onClick={() => setQ('')}>
//               مسح
//             </button>
//           )}
//         </form>
//         {q && matches.length === 0 && <div className="search-hint">لا توجد نتائج مطابقة.</div>}
//       </div>

//       {/* Services */}
//       <div className="container py-4">
//         <ServiceCards />
//       </div>
//     </main>
//   );
// }

// export default function App() {
//   return (
//     <div
//       id="top"
//       dir="rtl"
//       className="bg-light"
//       style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
//     >
//       <NavbarDropdown />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/go/:slug" element={<Redirector />} />
//       </Routes>

//       <footer className="mt-auto text-center py-3 bg-white border-top">
//         <a
//           href="https://nagimbsher.github.io/support/privacy-policy.html"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Privacy Policy
//         </a>
//       </footer>
//     </div>
//   );
// }


import React, { useMemo, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavbarMobileMenu from './component/NavbarMobileMenu';
import Redirector from './component/Redirector';
import Links from './component/Links';
import ServiceCards from './component/ServiceCards';

import links from './data/linksData';
import './Modal.css';
import { useLanguage } from './context/LanguageContext'; // ⬅️ use language

function Home() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const matches = useMemo(() => {
    const v = q.trim().toLowerCase();
    if (!v) return [];
    return links.filter(
      l =>
        l.label.toLowerCase().includes(v) ||
        (l.keywords && l.keywords.toLowerCase().includes(v))
    );
  }, [q]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (matches.length > 0) {
      navigate(`/go/${matches[0].slug}`);
    }
  };

  // ✅ translations
  const t = {
    ar: {
      placeholder: 'ابحث عن خدمة (مثال: رخصة، جواز، إثيوبيا…)',
      search: 'بحث',
      clear: 'مسح',
      noResults: 'لا توجد نتائج مطابقة.',
    },
    he: {
      placeholder: 'חפש שירות (לדוגמה: רישיון, דרכון, אתיופיה…)',
      search: 'חפש',
      clear: 'נקה',
      noResults: 'לא נמצאו תוצאות מתאימות.',
    },
    en: {
      placeholder: 'Search for a service (e.g., license, passport, Ethiopia…)',
      search: 'Search',
      clear: 'Clear',
      noResults: 'No matching results.',
    },
  }[lang];

  return (
    <main className="home-main">
      <div className="search-card">
        <form
          className="search-row"
          onSubmit={onSubmit}
          role="search"
          aria-label={t.search}
        >
          <input
            type="search"
            className="search-input"
            placeholder={t.placeholder}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="search-button" type="submit" disabled={!q.trim()}>
            {t.search}
          </button>
          {q && (
            <button
              type="button"
              className="clear-button"
              onClick={() => setQ('')}
            >
              {t.clear}
            </button>
          )}
        </form>
        {q && matches.length === 0 && (
          <div className="search-hint">{t.noResults}</div>
        )}
      </div>

      {/* Content below the search */}
      <div className="container py-4">
        <ServiceCards />
        <Links />
      </div>
    </main>
  );
}

export default function App() {
  const { lang } = useLanguage();

  return (
    <div
      id="top"
      dir={lang === 'en' ? 'ltr' : 'rtl'} // ✅ switch automatically
      className="bg-light"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
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
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}



// import React, { useMemo, useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import NavbarMobileMenu from './component/NavbarMobileMenu';
// import Redirector from './component/Redirector';
// import Links from './component/Links';
// import ServiceCards from './component/ServiceCards';

// import links from './data/linksData';
// import './Modal.css';

// function Home() {
//   const [q, setQ] = useState('');
//   const navigate = useNavigate();

//   const matches = useMemo(() => {
//     const v = q.trim().toLowerCase();
//     if (!v) return [];
//     return links.filter(l =>
//       l.label.toLowerCase().includes(v) ||
//       (l.keywords && l.keywords.toLowerCase().includes(v))
//     );
//   }, [q]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (matches.length > 0) {
//       navigate(`/go/${matches[0].slug}`);
//     }
//   };

//   return (
//     <main className="home-main">
//       <div className="search-card">
//         <form className="search-row" onSubmit={onSubmit} role="search" aria-label="بحث عن خدمة">
//           <input
//             type="search"
//             className="search-input"
//             placeholder="ابحث عن خدمة (مثال: رخصة، جواز، إثيوبيا…)"
//             value={q}
//             onChange={(e) => setQ(e.target.value)}
//           />
//           <button className="search-button" type="submit" disabled={!q.trim()}>
//             بحث
//           </button>
//           {q && (
//             <button
//               type="button"
//               className="clear-button"
//               onClick={() => setQ('')}
//             >
//               مسح
//             </button>
//           )}
//         </form>
//         {q && matches.length === 0 && (
//           <div className="search-hint">لا توجد نتائج مطابقة.</div>
//         )}
//       </div>

//       {/* Content below the search */}
//       <div className="container py-4">
//          <ServiceCards />
//         <Links />
//       </div>
//     </main>
//   );
// }

// export default function App() {
//   return (
//     <div
//       id="top"
//       dir="rtl"
//       className="bg-light"
//       style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
//     >
//       <NavbarMobileMenu />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/go/:slug" element={<Redirector />} />
//       </Routes>

//       <footer className="mt-auto text-center py-3 bg-white border-top">
//         <a
//           href="https://nagimbsher.github.io/support/privacy-policy.html"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Privacy Policy
//         </a>
//       </footer>
//     </div>
//   );
// }


// import React, { useMemo, useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import NavbarMobileMenu from './component/NavbarMobileMenu';
// import Redirector from './component/Redirector';
// import Links from './component/Links';
// import links from './data/linksData';
// import './Modal.css';

// function Home() {
//   const [q, setQ] = useState('');
//   const navigate = useNavigate();

//   const matches = useMemo(() => {
//     const v = q.trim().toLowerCase();
//     if (!v) return [];
//     return links.filter(l =>
//       l.label.toLowerCase().includes(v) ||
//       (l.keywords && l.keywords.toLowerCase().includes(v))
//     );
//   }, [q]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (matches.length > 0) {
//       navigate(`/go/${matches[0].slug}`);
//     }
//   };

//   return (
//     <>
//       {/* Search bar */}
//       <header className="bg-white border-bottom">
//         <div className="container py-3">
//           <form className="input-group" onSubmit={onSubmit} role="search" aria-label="بحث عن خدمة">
//             <input
//               type="search"
//               className="form-control form-control-lg"
//               placeholder="ابحث عن خدمة (مثال: رخصة، جواز، إثيوبيا…)"
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//             />
//             <button className="btn btn-primary btn-lg" type="submit" disabled={!q.trim()}>بحث</button>
//             {q && <button type="button" className="btn btn-outline-secondary btn-lg" onClick={() => setQ('')}>مسح</button>}
//           </form>
//           {q && matches.length === 0 && <div className="text-muted mt-2">لا توجد نتائج مطابقة.</div>}
//         </div>
//       </header>

//       {/* Main content (video only) */}
//       <main className="flex-grow-1">
//         <div className="container py-4">
//           <Links />
//         </div>
//       </main>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div id="top" dir="rtl" className="bg-light" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <NavbarMobileMenu />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/go/:slug" element={<Redirector />} />
//       </Routes>

//       <footer className="mt-auto text-center py-3 bg-white border-top">
//         <a href="https://nagimbsher.github.io/support/privacy-policy.html" target="_blank" rel="noopener noreferrer">
//           Privacy Policy
//         </a>
//       </footer>
//     </div>
//   );
// }


// import React from 'react';
// import NavbarLight from './component/NavbarLight'; // make sure this path matches your file

// const App = () => {
//   return (
//     <div
//       id="top"
//       dir="rtl" // Arabic-friendly layout
//       style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
//     >
//       {/* Light navbar */}
      

//       {/* Main content */}
//       <main style={{ flex: 1 }}>
//           <NavbarLight />
//       </main>
   
//       {/* Footer */}
//       <footer
//         style={{
//           marginTop: 'auto',
//           textAlign: 'center',
//           padding: '10px 0',
//           backgroundColor: '#f9f9f9'
//         }}
//       >
//         <a
//           href="https://nagimbsher.github.io/support/privacy-policy.html"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Privacy Policy
//         </a>
//       </footer>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import Links from './component/Links';

// const App = () => {
//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <div style={{ flex: 1 }}>
//         <Links />  {/* Renders your main content */}
//       </div>
      
//       <footer style={{ marginTop: '20px', textAlign: 'center', padding: '10px 0', backgroundColor: '#f9f9f9' }}>
//         <a href="https://nagimbsher.github.io/support/privacy-policy.html" target="_blank" rel="noopener noreferrer">
//           Privacy Policy
//         </a>
//       </footer>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import Links from './component/Links';
// import PrivacyPolicy from './component/PrivacyPolicy';
// import NotFound from './NotFound'; 
// const App = () => {
//   const [currentView, setCurrentView] = useState('home'); 
//   const renderView = () => {
//     switch (currentView) {
//       case 'home':
//         return <Links />;
//       case 'privacy-policy':
//         return <PrivacyPolicy />;
//       default:
//         return <NotFound />; 
//     }
//   };

//   return (
//     <div>
//       <nav>
       
//         <button onClick={() => setCurrentView('home')}>Home</button>
//         <button onClick={() => setCurrentView('privacy-policy')}>Privacy Policy</button>
//       </nav>
      
//       {renderView()}
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Links from './component/Links';
// import NotFound from './NotFound';
// import PrivacyPolicy from './component/PrivacyPolicy'; 

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Links />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



