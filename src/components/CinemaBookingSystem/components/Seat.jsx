import React from "react";

const Seat = ({ title, color = "#f0f0f0", onClick }) => {
  return (
    <div
      style={{
        height: "30px",
        width: "40px",
        borderTop: "1px solid black",
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
        borderBottom: "6px solid black",
        borderRadius: "6px",
        textAlign: "center",
        lineHeight: "30px",
        margin: "4px",
        backgroundColor: color,
        cursor: color === "grey" ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Seat;
