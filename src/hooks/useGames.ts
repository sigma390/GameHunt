import { Games } from '../components/GameGrid';
import useData from './useData';
import { Genre } from './useGenre';
import { Platform } from './usePlatform';

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  // Create requestConfig dynamically based on selectedGenre

  return useData<Games>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};

export default useGames;
