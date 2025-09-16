export const bookingSlice = (set) => ({
  selectedSeats: [],
  totalAmount: 0,
  numberOfSeats: 0,
  onSeatSelect: (selectedSeat, amount) =>
    set((state) => {
      state.selectedSeats.push(selectedSeat);
      state.numberOfSeats += 1;
      state.totalAmount += amount;
    }),
  onSeatDeselect: (deselectedSeat, amount) =>
    set((state) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat !== deselectedSeat
      );
      state.numberOfSeats -= 1;
      state.totalAmount -= amount;
    }),
});
