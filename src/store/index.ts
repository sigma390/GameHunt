import { create } from 'zustand';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchTxt?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchTxt: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchTxt) => set(() => ({ gameQuery: { searchTxt } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
