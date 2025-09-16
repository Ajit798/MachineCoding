import React from "react";
import { legendBanner } from "../constants/constants";
import Seat from "./Seat";

const LegendBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        borderRadius: "10px",
        height: "40px",
        marginTop: "20px",
        backgroundColor: "lightgray",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      {Object.keys(legendBanner).map((item) => {
        return (
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            key={item}
          >
            <Seat key={item} color={legendBanner[item].color} />
            <span>
              {legendBanner[item].name}(
              {legendBanner[item].price
                ? `Rs${legendBanner[item].price}`
                : null}
              )
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LegendBanner;
