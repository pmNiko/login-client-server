import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  profile: any;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  reset: () => void;
};

const initialState: State = {
  token: "",
  profile: null,
  isAuth: false,
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      ...initialState,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: true,
        })),
      setProfile: (profile: any) =>
        set((state) => ({
          profile,
        })),
      reset: () => set(initialState),
    }),
    {
      name: "auth",
    }
  )
);
