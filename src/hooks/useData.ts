import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

import apiClient from '../services/api-client';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpnt: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errmsg, setErrormsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Add Abort Functionality
    const controller = new AbortController();

    setLoading(true);
    //One way
    apiClient
      .get<FetchResponse<T>>(endpnt, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrormsg(err.message);
        setLoading(false);
      });
    //cleanup function
    return () => controller.abort();

    //Another way
    // const fetchGames = async () => {
    //   try {
    //     const res = await apiClient.get<GameResponse>('/games');
    //     setGames(res.data.results);
    //   } catch (err) {
    //     setErrormsg((err as AxiosError).message);
    //   }
    // };
    // fetchGames();
  }, []);

  return { data, errmsg, setErrormsg, loading };
};

export default useData;
