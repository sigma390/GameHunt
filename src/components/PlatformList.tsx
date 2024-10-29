import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import { Platform } from './GameGrid';

interface Props {
  onSelectplatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformList = ({ onSelectplatform, selectedPlatform }: Props) => {
  const { data } = usePlatform();
  console.log(data);
  return (
    <Menu>
      {selectedPlatform ? (
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform.name}
        </MenuButton>
      ) : (
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platform
        </MenuButton>
      )}

      <MenuList>
        {data?.results.map((item) => {
          return (
            <MenuItem onClick={() => onSelectplatform(item)} key={item.id}>
              {item.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
