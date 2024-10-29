import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import { Platform } from '../services/platformService';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameSkeleton from './GameSkeleton';
//==============> OLD ways<=============
// interface Props {
//   selectedGenre: Genre | null;
//   selectedPlatform: Platform | null;
// }

interface Props {
  gameQuery: GameQuery;
}
export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Games[];
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box padding={10}>
      {isError && <p>{isError}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={6}>
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => {
              return (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              );
            })}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginTop={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? (
            'Loading...'
          ) : (
            <>
              Load more
              <span className='ml-2 mt-1'>
                <FaAngleDoubleDown />
              </span>
            </>
          )}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
