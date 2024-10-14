import { GameQuery } from '../App';
import { Games } from '../components/GameGrid';
import useData from './useData';

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) => {
  // Create requestConfig dynamically based on selectedGenre

  return useData<Games>(
    '/games',
    // { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    // [selectedGenre?.id, selectedPlatform?.id]
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTxt,
      },
    },
    [gameQuery]
  );
};

export default useGames;
