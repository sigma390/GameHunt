import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: GamesProps[];
}
interface GamesProps {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<GamesProps[]>([]);
  const [errmsg, setErrormsg] = useState('');
  useEffect(() => {
    //One way
    apiClient
      .get<GameResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrormsg(err.message));
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
  return (
    <>
      <div>
        {errmsg && <p>{errmsg}</p>}
        <ul>
          {games.map((game) => {
            return <li key={game.id}>{game.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default GameGrid;
