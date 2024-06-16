import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinksComponent from './LinksComponent'; // Your main component
import NotFound from './NotFound'; // 404 component

const App = () => {
  return (
    <Router basename="/support">
      <Routes>
        <Route path="/" element={<LinksComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
