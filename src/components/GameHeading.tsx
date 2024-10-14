import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ''} ${
    gameQuery.platform?.name || ''
  } Games`;
  //games
  return (
    <Heading marginLeft={10} marginBottom={2} as={'h1'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
