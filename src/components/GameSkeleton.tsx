import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameSkeleton = () => {
  return (
    <Card width='250px' borderRadius={10} overflow={'hidden'}>
      <Skeleton height={'270px'}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameSkeleton;
