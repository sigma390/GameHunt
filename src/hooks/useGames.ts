import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { GameResponse, GamesProps } from '../components/GameGrid';
import apiClient from '../services/api-client';

const useGames = () => {
  const [games, setGames] = useState<GamesProps[]>([]);
  const [errmsg, setErrormsg] = useState('');
  useEffect(() => {
    //Add Abort Functionality
    const controller = new AbortController();

    //One way
    apiClient
      .get<GameResponse>('/games', { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrormsg(err.message);
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

  return { games, errmsg, setErrormsg, setGames };
};

export default useGames;
