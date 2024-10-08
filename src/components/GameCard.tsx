import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import { Games } from './GameGrid';
import PlatformIconList from './PlatformIconList';

interface GameProps {
  game: Games;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((plt) => plt.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
