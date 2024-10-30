import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

import useGen from '../hooks/useGen';
import usePlat from '../hooks/usePlat';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlat(gameQuery.platformId);
  const genre = useGen(gameQuery.genreId);
  const heading = `${genre?.name || ''} ${platform?.name || ''} Games`;
  //games
  return (
    <Heading marginLeft={10} marginBottom={2} as={'h1'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
