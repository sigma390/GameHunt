import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInpt from './SearchInpt';

// interface Props {
//   onSearch: (searchTxt: string) => void;
// }

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px'></Image>
      <SearchInpt />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
