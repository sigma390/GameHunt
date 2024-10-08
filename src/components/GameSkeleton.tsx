import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameSkeleton = () => {
  return (
    <Card width='250px'>
      <Skeleton height={'270px'}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameSkeleton;
