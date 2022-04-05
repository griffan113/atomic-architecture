import React from 'react';
import {
  Button,
  Flex,
  Icon,
  useColorMode,
  ButtonGroup,
} from '@chakra-ui/react';
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
      <ButtonGroup
        size="sm"
        pr={['6', '8']}
        mx={['6', '8']}
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
        colorScheme="whiteAlpha"
        variant="ghost"
      >
        <Button onClick={toggleColorMode} color="gray.300">
          {colorMode === 'dark' ? (
            <Icon as={RiSunLine} fontSize="20" />
          ) : (
            <Icon as={RiMoonLine} />
          )}
        </Button>
        <Button color="gray.300">
          <Icon as={RiNotificationLine} fontSize="20" />
        </Button>
        <Button color="gray.300">
          <Icon as={RiUserAddLine} fontSize="20" />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
