import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LinksComponent from './LinksComponent';
import NotFound from './NotFound';
import PrivacyPolicy from './PrivacyPolicy'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinksComponent />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;







// import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import LinksComponent from './LinksComponent';
// import NotFound from './NotFound';
// import BirdsBackground from './BirdsBackground'; // Keep BirdsBackground here
// import PrivacyPolicy from './PrivacyPolicy'; 

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <BirdsBackground /> {/* Render the animation first */}
//               <LinksComponent /> {/* Render LinksComponent below it */}
//             </>
//           }
//         />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



