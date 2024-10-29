import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import { Platform } from '../services/platformService';

interface Props {
  onSelectplatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformList = ({ onSelectplatform, selectedPlatformId }: Props) => {
  const { data } = usePlatform();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );
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
