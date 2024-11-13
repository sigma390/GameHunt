import { Image, SimpleGrid } from '@chakra-ui/react';

import { ScreenShot } from '../entities/ScreenShot';
import useScreenShots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data } = useScreenShots(gameId);
  console.log(data);
  return (
    <SimpleGrid gap={5} columns={{ base: 1, md: 2 }}>
      {data?.results.map((d: ScreenShot) => (
        <Image key={d.id} src={d.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
