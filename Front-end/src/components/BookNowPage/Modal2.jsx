import React from "react";
import "../../components/CSS/Modal.css";

const Modal = ({ show, onClose, onSubmit, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <div className="d-flex" style={{ gap:'20px' }}>
          <button className="modal-act-btn" onClick={onClose}>
            Go Back
          </button>
          <button className="modal-act-btn" onClick={onSubmit}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
