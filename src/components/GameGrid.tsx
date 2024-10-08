import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Games[];
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const GameGrid = () => {
  const { games, errmsg } = useGames();

  return (
    <>
      {errmsg && <p>{errmsg}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {games.map((game) => {
          return <GameCard key={game.id} game={game}></GameCard>;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
