import { useQuery } from '@tanstack/react-query';
import { ScreenShot } from '../entities/ScreenShot';
import HttpsService from '../services/HttpsService';

const useScreenShots = (gameId: number) => {
  const apiClient = new HttpsService<ScreenShot>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ['screenshot', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
