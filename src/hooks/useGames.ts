import { Games } from '../components/GameGrid';
import useData from './useData';
import { Genre } from './useGenre';

const useGames = (selectedGenre: Genre | null) => {
  // Create requestConfig dynamically based on selectedGenre
  const requestConfig = selectedGenre
    ? { params: { genres: selectedGenre.id } }
    : {};

  return useData<Games>('/games', requestConfig, [selectedGenre?.id]);
};

export default useGames;
