import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

import apiClient from '../services/api-client';

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGames = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errmsg, setErrormsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Add Abort Functionality
    const controller = new AbortController();

    setLoading(true);
    //One way
    apiClient
      .get<FetchGenresResponse>('/games', { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, errmsg, setErrormsg, loading };
};

export default useGames;
