import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';

import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import GenreListContainer from './GenreListContainer';
import GenreSkeelton from './GenreSkeelton';

const GenreList = () => {
  //   const { genres } = useGenre();
  const { data, isLoading } = useGenre();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Heading marginTop={-5} marginBottom={5} fontSize={'2xl'}>
        Genre
      </Heading>
      <List marginTop={-3}>
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GenreListContainer key={skeleton}>
              <GenreSkeelton />
            </GenreListContainer>
          ))}
        {data?.results.map((genre) => (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={8}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                variant={'link'}
                marginLeft={3}
                whiteSpace={'normal'}
                textAlign='left'
                onClick={() => setGenreId(genre.id)}
                fontSize={'lg'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
