import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LinksComponent from './LinksComponent'; 
import NotFound from './NotFound'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinksComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
