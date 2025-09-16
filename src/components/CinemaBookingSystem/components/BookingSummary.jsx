import React from "react";
import TextField from "./TextInput";

const BookingSummary = ({ selectedSeats, numberOfSeats, totalAmount }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        height: "auto",
        backgroundColor: "lightgray",
        gap: "10px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <TextField
        title={`Selected Seats: ${selectedSeats?.join(",")}`}
        variant="p"
      />
      <TextField title={`Number of Seats: ${numberOfSeats}`} variant="p" />
      <TextField
        title={`Total Amount: ${totalAmount}`}
        variant="h3"
        color="green"
      />
    </div>
  );
};

export default BookingSummary;
