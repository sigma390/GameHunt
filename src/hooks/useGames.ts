import { Games } from '../components/GameGrid';

import useData from './useData';

const useGames = () => {
  return useData<Games>('/games');
};

export default useGames;
