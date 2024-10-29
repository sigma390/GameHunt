import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import genreService, { Genre } from '../services/genreService';
import { FetchResponse } from './useData';

const useGenre = () => {
  const query = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genreService.getAll,
    refetchInterval: 600000, // refetch every 10 minutes
    initialData: { count: genres.length, results: genres },
  });
  return query;
};

export default useGenre;
