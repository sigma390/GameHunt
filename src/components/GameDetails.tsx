import { Heading, Text } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';

const GameDetails = () => {
  const { id } = useParams();
  const { data: game, isLoading } = useGame(parseInt(id!));

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      <Heading>{game?.name}</Heading>

      <ExpandableText children={game?.description_raw || ''} />
      <GameAttributes game={game!} />
    </>
  );
};

export default GameDetails;
