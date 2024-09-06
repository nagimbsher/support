import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinksComponent from './LinksComponent';
import PrivacyPolicy from './PrivacyPolicy';
import ContactMe from './ContactMe';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinksComponent />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
};

export default App;

