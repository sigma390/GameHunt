import { Image, SimpleGrid } from '@chakra-ui/react';

import ScreenShot from '../entities/ScreenShot';
import useScreenShots from '../hooks/useScreenshots';

interface Props {
  gameId: number | undefined;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId!);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file: ScreenShot) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
