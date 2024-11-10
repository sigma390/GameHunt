import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { GameProps } from '../entities/GameProps';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

const GameCard = ({ game }: GameProps) => {
  // const navigate = useNavigate();
  // const handleClick = (id: number) => {
  //   console.log(id);
  //   navigate(`/games/${id}`);
  // };

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((plt) => plt.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>
          <Link to={'/games/' + game.id}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
