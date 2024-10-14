import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
interface Props {
  onSearch: (searchTxt: string) => void;
}

const SearchInpt = ({ onSearch }: Props) => {
  //ref hook easy
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Handle form submission
        if (ref.current) {
          console.log(ref.current.value);
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          variant={'filled'}
          placeholder='Search games...'
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInpt;
