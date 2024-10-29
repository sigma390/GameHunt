import { useQuery } from '@tanstack/react-query';

import platforms from '../data/platforms';
import { FetchResponse } from '../services/api-client';
import platformService, { Platform } from '../services/platformService';

const usePlatform = () => {
  // return useData<Platform>('/platforms/lists/parents');
  // return {
  //   data: platforms,
  // };

  const queryy = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    initialData: { count: platforms.length, results: platforms, next: null },
  });
  return queryy;
};
export default usePlatform;
