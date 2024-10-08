import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreSkeelton = () => {
  return (
    <Card width='110px'>
      <Skeleton height={'10px'} paddingY={7}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GenreSkeelton;
