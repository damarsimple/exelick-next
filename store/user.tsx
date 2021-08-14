import create from "zustand";
import { User } from "../types/type";

interface UserStore {
  user: User | null | undefined;
  setUser: (e: User | null | undefined) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
