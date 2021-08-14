import create from "zustand";

interface TodoState {
  carts: string[];
  setCarts: (e: string[]) => void;
  removeCarts: (e: string) => void;
}

export const useCartsStore = create<TodoState>((set) => ({
  carts: [],
  setCarts: (carts) => set({ carts }),
  removeCarts: (e) =>
    set((state) => {
      return { ...state, carts: state.carts.filter((x) => x != e) };
    }),
}));

// function transforms(original: string[], value: string) {
//     const copy = original;

//  }
