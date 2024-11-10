import { Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const GameDetails = () => {
  const { id } = useParams();

  const { data: game, isLoading } = useGame(parseInt(id!));

  return (
    <div>
      {isLoading && <Text className=' '>Loading...</Text>}
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </div>
  );
};

export default GameDetails;
