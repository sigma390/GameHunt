import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';

import usePlat from '../hooks/usePlat';
import useGameQueryStore from '../store';

const PlatformList = () => {
  const { data } = usePlatform();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlat(platformId);
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
            <MenuItem
              onClick={() => setSelectedPlatformId(item.id)}
              key={item.id}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
