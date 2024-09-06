import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactMe.css'; 

const ContactMe = () => {
  const navigate = useNavigate(); 
  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <ul>
        <li>Email: <a href="mailto:nagimbasher@gmail.com">nagimbasher@gmail.com</a></li>
        <li>WhatsApp: <a href="https://wa.me/972545946241" target="_blank" rel="noopener noreferrer">+972545946241</a></li>
      </ul>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
};

export default ContactMe;

