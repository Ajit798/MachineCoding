import React, { Fragment } from "react";
import { ASCII_VALUE_OF_A } from "../constants/constants";
import Seat from "./Seat";
import {
  getPrebookedSeats,
  getSeatColor,
  getTicketPrice,
} from "../utils/utils";

const BookingHall = ({
  layout,
  seatPreference,
  onSeatSelect,
  selectedSeats,
}) => {
  const {
    NO_OF_ROWS: No_of_rows,
    NO_OF_SEATS_PER_ROW: No_of_seats_per_row,
    AislePosition,
  } = layout;

  console.log({ selectedSeats });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        gap: "20px",
        alignItems: "center",
      }}
    >
      {Array.from({ length: No_of_rows }).map((ele, index) => (
        <div
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
          key={index}
        >
          <b>{String.fromCharCode(ASCII_VALUE_OF_A + index)}</b>
          <div style={{ display: "flex", gap: "10px" }}>
            {Array.from({ length: No_of_seats_per_row }).map((ele, ind) => {
              return (
                <Fragment key={ind}>
                  {AislePosition === ind && (
                    <div style={{ visibility: "hidden", width: "40px" }}></div>
                  )}
                  <div>
                    <Seat
                      color={
                        getPrebookedSeats(
                          `${String.fromCharCode(ASCII_VALUE_OF_A + index)}${
                            ind + 1
                          }`
                        )
                          ? "grey"
                          : getSeatColor(
                              index,
                              seatPreference,
                              selectedSeats.includes(
                                `${String.fromCharCode(
                                  ASCII_VALUE_OF_A + index
                                )}${ind + 1}`
                              )
                            )
                      }
                      title={ind + 1}
                      onClick={() =>
                        onSeatSelect(
                          `${String.fromCharCode(ASCII_VALUE_OF_A + index)}${
                            ind + 1
                          }`,
                          getTicketPrice(index, seatPreference)
                        )
                      }
                    />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHall;
