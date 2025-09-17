

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import links from '../data/linksData';
import '../App.css';

export default function NavbarMobileMenu() {
  const closeOffcanvas = () => {
    const el = document.getElementById('mainMenu');
    const bs = window.bootstrap;
    if (el && bs?.Offcanvas) (bs.Offcanvas.getInstance(el) || new bs.Offcanvas(el)).hide();
  };

  const gov = links.filter(l => l.group === 'gov');
  const visas = links.filter(l => l.group === 'visas');

  const MenuItem = ({ to, children }) => (
    <Link
      className="list-group-item list-group-item-action text-start"
      to={to}
      onClick={closeOffcanvas}
    >
      {children}
    </Link>
  );

  return (
    <nav className="navbar navbar-light bg-white border-bottom sticky-top" dir="rtl">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#top">
          <FontAwesomeIcon icon={faHandshake} className="brand-icon" />
          <span className="fw-semibold">اهلا وسهلا</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="offcanvas offcanvas-end" tabIndex={-1} id="mainMenu" aria-labelledby="mainMenuLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mainMenuLabel">القائمة</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>

          <div className="offcanvas-body">
            <div className="small text-muted mb-2">خدمات حكومية</div>
            <div className="list-group list-group-flush">
              {gov.map(item => (
                <MenuItem key={item.slug} to={`/go/${item.slug}`}>{item.label}</MenuItem>
              ))}
            </div>

            <div className="small text-muted mt-4 mb-2">تأشيرات</div>
            <div className="list-group list-group-flush">
              {visas.map(item => (
                <MenuItem key={item.slug} to={`/go/${item.slug}`}>{item.label}</MenuItem>
              ))}
            </div>

            <div className="small text-muted mt-4 mb-2">أخرى</div>
            <div className="list-group list-group-flush">
           
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
