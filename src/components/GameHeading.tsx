import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatform();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${genre?.name || ''} ${selectedPlatform?.name || ''} Games`;
  //games
  return (
    <Heading marginLeft={10} marginBottom={2} as={'h1'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
