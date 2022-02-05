import create from "zustand";
import { persist } from "zustand/middleware";

let stateLoader = (set) => ({
  reset : true,
  action: "",
  addReset: (action) => set((state) => ({ reset: action })),
});

export const useLoaderStore = create(stateLoader);
