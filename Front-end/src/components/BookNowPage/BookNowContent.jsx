import React from "react";
import BookingForm from "./BookingForm"
import { useMobileView } from "../../contexts/MobileViewContext";

const BookNowContent = () => {

  const isMobileView = useMobileView();

  return (
    <div className="booking-form-container" style={{padding: isMobileView? '5rem 2rem':''}}>
      <BookingForm/>
    </div>
    
  );
};

export default BookNowContent;
