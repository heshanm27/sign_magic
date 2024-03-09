import { createJSONStorage, persist,PersistStorage } from "zustand/middleware";
import AsynStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

export interface InitState {
  store: {
    firstLoad: boolean;
    onBoarding: boolean;
  };
  setFirstLoad: (firstLoad: boolean) => void;
  setOnBoarding: (onBoarding: boolean) => void;
}

export const useInitStore = create<InitState>(
  // @ts-ignore
  persist(
    (set) => ({
      store: {
        firstLoad: true,
        onBoarding: true,
      },
      setFirstLoad: (firstLoad: boolean) => {
        set((state) => ({
          store: {
            ...state.store,
            firstLoad: firstLoad,
          },
        }));
      },
      setOnBoarding: (onBoarding: boolean) => {
        set((state) => ({
          store: {
            ...state.store,
            onBoarding: onBoarding,
          },
        }));
      },
    }),
    {
      name: "init-storage",
      storage: createJSONStorage(() => AsynStorage)
    }
  )
);
