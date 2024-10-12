import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenre';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameSkeleton from './GameSkeleton';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
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

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, errmsg, loading } = useGames(selectedGenre, selectedPlatform);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {errmsg && <p>{errmsg}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {loading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
