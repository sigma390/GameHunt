import { Heading, Text } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';
import GameScreenShots from './GameScreenShots';
import GameTrailer from './GameTrailer';

const GameDetails = () => {
  const { id } = useParams();
  const { data: game, isLoading } = useGame(parseInt(id!));

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      <Heading>{game?.name}</Heading>

      <ExpandableText children={game?.description_raw || ''} />
      <GameAttributes game={game!} />
      <GameTrailer gameId={game?.id || 0} />
      <GameScreenShots gameId={game?.id || 0} />
    </>
  );
};

export default GameDetails;
