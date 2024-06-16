import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${show ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Contact Help</h4>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

