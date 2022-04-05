import React from 'react';
import {
  Button,
  Flex,
  Icon,
  useColorMode,
  ButtonGroup,
  useBreakpointValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  RiMoonLine,
  RiNotificationLine,
  RiSettings3Line,
  RiSunLine,
  RiUserAddLine,
} from 'react-icons/ri';

export const HeaderButtonGroup: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center" ml="auto">
      <ButtonGroup
        size="sm"
        pr={['6', '8']}
        mx={['6', '8']}
        py="1"
        borderRightWidth={1}
        borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
        colorScheme="whiteAlpha"
        variant="ghost"
      >
        {isDesktop ? (
          <>
            <IconButton
              aria-label="Toggle Theme"
              icon={
                colorMode === 'dark' ? (
                  <Icon as={RiSunLine} fontSize="20" />
                ) : (
                  <Icon as={RiMoonLine} />
                )
              }
              color="gray.300"
              fontSize="21"
              onClick={toggleColorMode}
            />
            <IconButton
              aria-label="Toggle Theme"
              icon={<Icon as={RiNotificationLine} />}
              color="gray.300"
              fontSize="20"
            />
            <IconButton
              aria-label="Toggle Theme"
              icon={<Icon as={RiUserAddLine} />}
              color="gray.300"
              fontSize="20"
            />
          </>
        ) : (
          <Menu>
            <MenuButton
              fontSize="24"
              as={IconButton}
              aria-label="Options"
              icon={<RiSettings3Line />}
              variant="ghost"
              color="gray.300"
            />
            <MenuList bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
              <MenuItem
                icon={colorMode === 'dark' ? <RiSunLine /> : <RiMoonLine />}
                onClick={toggleColorMode}
              >
                Theme: {colorMode === 'dark' ? 'Dark' : 'Light'}
              </MenuItem>
              <MenuItem icon={<RiNotificationLine />}>Notifications</MenuItem>
              <MenuItem icon={<RiUserAddLine />}>Contacts</MenuItem>
            </MenuList>
          </Menu>
        )}
      </ButtonGroup>
    </Flex>
  );
};
