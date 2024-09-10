import React from 'react';
import "../../components/CSS/Modal.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;