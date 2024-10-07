import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Games } from './GameGrid';

interface GameProps {
  game: Games;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
