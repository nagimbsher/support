import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { LanguageProvider } from "./context/LanguageContext";

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageProvider>
  <HashRouter>
    <App />
  </HashRouter>
    </LanguageProvider>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
