import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mmkvStorage } from '~/utils/mmkvStorage';

export interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

export const useStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
    }),
    {
      name: 'bear-storage',
      storage: mmkvStorage,
    }
  )
);
