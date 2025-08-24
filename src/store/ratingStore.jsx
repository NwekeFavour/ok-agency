import { create } from "zustand";

export const useRatingStore = create((set) => ({
  rating: 0,
  setRating: (value) => set({ rating: value }),
}));
