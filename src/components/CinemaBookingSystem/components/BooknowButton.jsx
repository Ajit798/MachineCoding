import React from "react";

const BooknowButton = ({ title, onBookingConfirmation, styles }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ ...styles }} onClick={onBookingConfirmation}>
        {title}
      </button>
    </div>
  );
};

export default BooknowButton;
