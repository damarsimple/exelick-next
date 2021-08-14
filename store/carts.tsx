import create from "zustand";

interface CartStore {
  carts: string[];
  setCarts: (e: string[]) => void;
  removeCarts: (e: string) => void;
}

export const useCartsStore = create<CartStore>((set) => ({
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
