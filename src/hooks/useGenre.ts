import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { FetchResponse } from '../entities/FetchResponse';
import { Genre } from '../entities/Genre';
import genreService from '../services/genreService';

const useGenre = () => {
  const query = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genreService.getAll,
    refetchInterval: 600000, // refetch every 10 minutes
    initialData: { count: genres.length, results: genres, next: null },
  });
  return query;
};

export default useGenre;
