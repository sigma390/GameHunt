import { Heading } from '@chakra-ui/react';

import useGen from '../hooks/useGen';
import usePlat from '../hooks/usePlat';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGen(genreId);
  console.log(genre);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlat(platformId);

  const heading = `${genre?.name || ''} ${platform?.name || ''} Games`;
  //games
  return (
    <Heading marginLeft={10} marginBottom={2} as={'h1'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
