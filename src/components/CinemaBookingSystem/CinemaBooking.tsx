import React from "react";
import TextField from "./components/TextInput";
import BookingHall from "./components/BookingHall";
import { layout, seatPreference } from "./constants/constants";
import LegendBanner from "./components/LegendBanner";
import BookingSummary from "./components/BookingSummary";
import BooknowButton from "./components/BooknowButton";
import ScreenBanner from "./components/ScreenBanner";
import { useBookingStore } from "./store/store";

const CinemaBooking = () => {
  const {
    selectedSeats,
    numberOfSeats,
    totalAmount,
    onSeatSelect,
    onSeatDeselect,
  } = useBookingStore((state) => state);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <TextField title={"Cinema Hall Booking"} variant={"h3"} />
        <TextField title={"Select your preferred seats"} variant={"p"} />
      </div>
      <div style={{ width: "80%" }}>
        <ScreenBanner />
      </div>

      <div>
        <TextField title={"Screen"} variant={"h3"} color="grey" />
      </div>

      <div>
        <BookingHall
          layout={layout}
          seatPreference={seatPreference}
          onSeatSelect={onSeatSelect}
          selectedSeats={selectedSeats}
        />
      </div>
      <div style={{ width: "80%", marginTop: "20px" }}>
        <LegendBanner />
      </div>
      <div style={{ width: "80%", marginTop: "20px" }}>
        <BookingSummary
          totalAmount={totalAmount}
          selectedSeats={selectedSeats}
          numberOfSeats={numberOfSeats}
        />
      </div>
      <div style={{ width: "80%", marginTop: "20px" }}>
        <BooknowButton
          title={`Book ${
            numberOfSeats > 1
              ? `${numberOfSeats} Seat(s)`
              : `${numberOfSeats} Seat`
          } - ₹${totalAmount}`}
          onBookingConfirmation={() => {}}
          styles={{
            color: "white",
            width: "100%",
            backgroundColor: "green",
            borderRadius: "5px",
            height: "40px",
            marginBottom: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default CinemaBooking;
