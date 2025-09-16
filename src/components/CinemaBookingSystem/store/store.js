import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { bookingSlice } from "./bookingSlice";

export const useBookingStore = create(
  immer((set) => ({
    ...bookingSlice(set),
  }))
);
