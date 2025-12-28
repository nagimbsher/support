// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHandshake } from '@fortawesome/free-solid-svg-icons';
// import links from '../data/linksData';
// import '../App.css';

// export default function NavbarDropdown() {
//   const groups = [
//     { id: 'gov',   title: 'خدمات حكومية' },
//     { id: 'visas', title: 'تأشيرات' },
//   ];
//   const byGroup = (id) => links.filter(l => l.group === id);

//   return (
//     <nav className="navbar sticky-top app-navbar" dir="rtl">
//       <div className="container-fluid">
//         {/* Brand */}
//         <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
//           <FontAwesomeIcon icon={faHandshake} className="brand-icon" />
//           <span className="fw-semibold">اهلا وسهلا</span>
//         </Link>

//         {/* Dropdown toggle (hamburger look) */}
//         <div className="dropdown ms-auto">
//           <button
//             className="navbar-toggler app-dd-toggle"
//             type="button"
//             id="menuButton"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//             aria-label="فتح القائمة"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>

//           {/* Menu */}
//           <ul className="dropdown-menu dropdown-menu-end app-dropdown" aria-labelledby="menuButton" dir="rtl">
//             {groups.map((g, gi) => (
//               <React.Fragment key={g.id}>
//                 {gi > 0 && <li><hr className="dropdown-divider" /></li>}
//                 <li><h6 className="dropdown-header">{g.title}</h6></li>
//                 {byGroup(g.id).map(item => (
//                   <li key={item.slug}>
//                     <Link className="dropdown-item" to={`/go/${item.slug}`}>{item.label}</Link>
//                   </li>
//                 ))}
//               </React.Fragment>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
