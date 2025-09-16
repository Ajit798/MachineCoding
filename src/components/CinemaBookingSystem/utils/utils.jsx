import { preBookedSeats } from "../constants/constants";

export const getJsxElement = ({ styles, title, ...props }) => ({
  h1: (
    <h1 style={styles} {...props}>
      {title}
    </h1>
  ),
  h2: (
    <h2 style={styles} {...props}>
      {title}
    </h2>
  ),
  h3: (
    <h3 style={styles} {...props}>
      {title}
    </h3>
  ),
  h4: (
    <h4 style={styles} {...props}>
      {title}
    </h4>
  ),
  h5: (
    <h5 style={styles} {...props}>
      {title}
    </h5>
  ),
  h6: (
    <h6 style={styles} {...props}>
      {title}
    </h6>
  ),
  p: (
    <p style={styles} {...props}>
      {title}
    </p>
  ),
});

export const getPrebookedSeats = (seat) => {
  return preBookedSeats.includes(seat);
};

export const getSeatColor = (row, seatPreference, isSelected) => {
  const { regular, premium, vip } = seatPreference;
  if (isSelected) return "green";
  if (regular.rows.includes(row)) return regular.color;
  if (premium.rows.includes(row)) return premium.color;
  if (vip.rows.includes(row)) return vip.color;
  return "white";
};

export const getTicketPrice = (row, seatPreference) => {
  const { regular, premium, vip } = seatPreference;
  if (regular.rows.includes(row)) return regular.price;
  if (premium.rows.includes(row)) return premium.price;
  if (vip.rows.includes(row)) return vip.price;
  return 0;
};
