import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      className=' duration-200 hover:scale-105'
      borderRadius={10}
      overflow={'hidden'}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
