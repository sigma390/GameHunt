import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import { Genre } from '../services/genreService';
import getCroppedImageUrl from '../services/image-url';
import GenreListContainer from './GenreListContainer';
import GenreSkeelton from './GenreSkeelton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  //   const { genres } = useGenre();
  const { data, isLoading } = useGenre();

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
                onClick={() => onSelectGenre(genre)}
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
