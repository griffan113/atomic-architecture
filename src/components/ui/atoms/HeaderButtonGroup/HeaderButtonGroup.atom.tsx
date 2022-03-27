import React from 'react';
import { Button, Flex, HStack, Icon, useColorMode } from '@chakra-ui/react';
import {
  RiMoonLine,
  RiNotificationLine,
  RiSunLine,
  RiUserAddLine,
} from 'react-icons/ri';

export const HeaderButtonGroup: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex align="center" ml="auto">
      <HStack
        spacing="2"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
      >
        <Button
          onClick={toggleColorMode}
          colorScheme="whiteAlpha"
          variant="ghost"
          color="gray.300"
        >
          {colorMode === 'dark' ? (
            <Icon as={RiSunLine} fontSize="20" />
          ) : (
            <Icon as={RiMoonLine} />
          )}
        </Button>
        <Button color="gray.300" colorScheme="whiteAlpha" variant="ghost">
          <Icon as={RiNotificationLine} fontSize="20" />
        </Button>
        <Button color="gray.300" colorScheme="whiteAlpha" variant="ghost">
          <Icon as={RiUserAddLine} fontSize="20" />
        </Button>
      </HStack>
    </Flex>
  );
};
