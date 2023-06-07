import { create } from "zustand";

type State = {
  basename: string;
};

type Actions = {
  setBasename: (basename: string) => void;
};

export const useLayoutStore = create<State & Actions>((set) => ({
  basename: "",
  setBasename: (basename: string) =>
    set((state) => ({
      basename,
    })),
}));
