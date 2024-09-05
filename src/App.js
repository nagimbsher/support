import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LinksComponent from './LinksComponent';
import NotFound from './NotFound';
import PrivacyPolicy from './PrivacyPolicy'; 

const App = () => {
  return (
    <Router basename= "/">
      <Routes>
        <Route path="/" element={<LinksComponent />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
