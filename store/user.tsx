import create from "zustand";
import { User } from "../types/type";
import { persist } from "zustand/middleware";

interface UserStore {
  user: User | null | undefined;
  setUser: (e: User | null | undefined) => void;
}

// export const useUserStore = persist<UserStore>(
//   create((set) => ({
//     user: null,
//     setUser: (user) => set({ user }),
//   })),
//   {
//     name: "user-storage",
//   }
// );

export const useUserStore = create<UserStore>(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage", // unique name
    }
  )
);
