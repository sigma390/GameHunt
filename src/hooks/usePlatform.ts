import { useQuery } from '@tanstack/react-query';

import platforms from '../data/platforms';
import platformService, { Platform } from '../services/platformService';
import { FetchResponse } from '../services/api-client';

const usePlatform = () => {
  // return useData<Platform>('/platforms/lists/parents');
  // return {
  //   data: platforms,
  // };

  const queryy = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    initialData: { count: platforms.length, results: platforms },
  });
  return queryy;
};
export default usePlatform;
