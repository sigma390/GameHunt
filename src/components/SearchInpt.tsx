import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInpt = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        variant={'filled'}
        placeholder='Search games...'
      ></Input>
    </InputGroup>
  );
};

export default SearchInpt;
