import { useQuery } from '@tanstack/react-query';
import { Games } from '../entities/Games';
import HttpsService from '../services/HttpsService';

const apiClient = new HttpsService<Games>('/games');

const useGame = (id: number) => {
  return useQuery({
    queryKey: ['game', id],
    queryFn: () => {
      return apiClient.get(id); // Explicitly return the result here
    },
  });
};

export default useGame;
