import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  //   const { genres } = useGenre();
  const { data } = useGenre();
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={2} key={genre.id}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
