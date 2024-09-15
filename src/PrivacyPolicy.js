import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPager } from '@fortawesome/free-solid-svg-icons'; // Import the pager icon

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This privacy policy explains how we handle your information.</p>
      
      <h2>Information We Collect</h2>
      <p>Our app does not collect or store any personal or sensitive user data.</p>
      
      <h2>External Links</h2>
      <p>The app provides links to official government websites. We are not responsible for the content or privacy practices of those sites.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions about this privacy policy, you can contact us at:</p>
      
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:nagimbasher@gmail.com">nagimbasher@gmail.com</a>
        </li>
        <li>
          WhatsApp: 
          <a href="https://wa.me/972545946241" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> +972545946241
          </a>
        </li>
      </ul>
      <p>
      You can also visit our <FontAwesomeIcon icon={faPager} />  <a href="https://nagimbsher.github.io/support/" target="_blank" rel="noopener noreferrer">Support Page</a>.
      </p>
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
    </div>
  );
};

export default PrivacyPolicy;