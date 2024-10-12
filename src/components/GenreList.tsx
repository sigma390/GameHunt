import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenre';
import getCroppedImageUrl from '../services/image-url';
import GenreListContainer from './GenreListContainer';
import GenreSkeelton from './GenreSkeelton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  //   const { genres } = useGenre();
  const { data, loading } = useGenre();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <List>
        {loading &&
          Skeletons.map((skeleton) => (
            <GenreListContainer key={skeleton}>
              <GenreSkeelton />
            </GenreListContainer>
          ))}
        {data.map((genre) => (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant={'link'}
                marginLeft={1}
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
