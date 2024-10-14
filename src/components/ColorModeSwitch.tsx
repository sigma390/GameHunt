import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { CiLight } from 'react-icons/ci';

import { MdOutlineDarkMode } from 'react-icons/md';
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      {colorMode === 'light' ? (
        <CiLight />
      ) : (
        <Text className=' text-xl'>
          <MdOutlineDarkMode />
        </Text>
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
