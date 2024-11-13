import { useQuery } from '@tanstack/react-query';
import { Trailers } from '../entities/Trailers';
import HttpsService from '../services/HttpsService';

const useTrailers = (gameId: number) => {
  const apiClient = new HttpsService<Trailers>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};
export default useTrailers;
