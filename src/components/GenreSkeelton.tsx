import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreSkeelton = () => {
  return (
    <Card width='auto'>
      <Skeleton height={'10px'} paddingY={7}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GenreSkeelton;
