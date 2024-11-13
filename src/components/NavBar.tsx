import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInpt from './SearchInpt';

// interface Props {
//   onSearch: (searchTxt: string) => void;
// }

const NavBar = () => {
  return (
    <HStack
      padding='10px'
      //  className=' shadow-glow-yellow'
    >
      <Image
        // className=' hover: shadow-glow-yellow rounded-2xl transition ease-in-out duration-300'
        src={logo}
        boxSize='60px'
      ></Image>
      <SearchInpt />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
