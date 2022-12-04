import create from "zustand";


export const useStatusMenu = create((set) => ({
    status: false,
    setStatus: (value) => set(() => ({ status: value })),
  }));