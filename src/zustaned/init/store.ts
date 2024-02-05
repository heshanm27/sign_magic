import {persist} from 'zustand/middleware';
import AsynStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface InitState {
  store: {
    firstLoad: boolean;

  
  }

}

export const useInitStore = create<InitState>(
  // @ts-ignore
  persist(
    set => ({
      store: {
        firstLoad: false,
        onBoarding: false,
     }
    }
    
    
    ),
    {
      name: 'init-storage',
      getStorage: () => AsynStorage,
    },
  ),
);
