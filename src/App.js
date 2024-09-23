import React from 'react';
import Links from './component/Links';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Links />  {/* Renders your main content */}
      </div>
      
      <footer style={{ marginTop: '20px', textAlign: 'center', padding: '10px 0', backgroundColor: '#f9f9f9' }}>
        <a href="https://nagimbsher.github.io/support/privacy-policy.html" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default App;


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



