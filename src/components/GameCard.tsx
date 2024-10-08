import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Games } from './GameGrid';
import PlatformIconList from './PlatformIconList';

interface GameProps {
  game: Games;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((plt) => plt.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
