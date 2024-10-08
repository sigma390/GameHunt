import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GenreListContainer = ({ children }: Props) => {
  return (
    <Box padding={2} overflow={'hidden'}>
      {children}
    </Box>
  );
};

export default GenreListContainer;
