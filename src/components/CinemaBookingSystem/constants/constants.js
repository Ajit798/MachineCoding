export const NO_OF_ROWS = 8;
export const NO_OF_SEATS_PER_ROW = 12;

export const layout = {
  NO_OF_SEATS_PER_ROW,
  NO_OF_ROWS,
  AislePosition: 6,
};

export const seatPreference = {
  regular: { price: 150, color: "skyBlue", name: "Regular", rows: [0, 1, 2] },
  premium: {
    price: 250,
    color: "orange",
    name: "Premium",
    rows: [3, 4, 5],
  },
  vip: { price: 350, color: "lightYellow", name: "VIP", rows: [6, 7] },
};

export const ASCII_VALUE_OF_A = 65;

export const preBookedSeats = ["A1", "A2", "B5", "C3", "D7", "E8", "F6", "G4"];

export const legendBanner = {
  regular: {
    price: 150,
    color: "skyBlue",
    name: "Regular",
  },
  premium: {
    price: 250,
    color: "orange",
    name: "Premium",
  },
  vip: {
    price: 350,
    color: "lightYellow",
    name: "VIP",
  },
  booked: { price: 0, color: "grey", name: "Booked" },
  selected: { price: 0, color: "green", name: "Selected" },
};
