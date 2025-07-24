import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const mmkvStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const value = storage.getString(key);
    return value === undefined ? null : value;
  },
  setItem: async (key: string, value: string): Promise<void> => {
    storage.set(key, value);
  },
  removeItem: async (key: string): Promise<void> => {
    storage.delete(key);
  },
};
