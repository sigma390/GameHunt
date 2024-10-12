import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';

const PlatformList = () => {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((item) => {
          return <MenuItem key={item.id}>{item.name}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
