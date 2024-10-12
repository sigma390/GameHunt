import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

export interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrderr: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrderr }: Props) => {
  const sortOrder = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];
  const currenSortOrder = sortOrder.find((s) => s.value === sortOrderr);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currenSortOrder?.label || 'Relevance'}
      </MenuButton>

      <MenuList>
        {sortOrder.map((item) => {
          return (
            <MenuItem
              onClick={() => onSelectSortOrder(item.value)}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
