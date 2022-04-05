import React from 'react';
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenu5Line } from 'react-icons/ri';

import {
  Logo,
  HeaderSearchBox,
  HeaderButtonGroup,
  HeaderProfileInfo,
} from '@/components/ui/atoms';
import { useDrawer } from '@/src/hooks/drawer';

export const Header: React.FC = () => {
  const { onOpen } = useDrawer();

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isDesktop && (
        <IconButton
          aria-label="Open Drawer"
          icon={<Icon as={RiMenu5Line} />}
          fontSize="24"
          onClick={onOpen}
          mr="2"
          bg="transparent"
          size="sm"
        />
      )}
      <Logo w="64" />
      {isDesktop && <HeaderSearchBox />}
      <HeaderButtonGroup />
      <HeaderProfileInfo showProfileData={isDesktop} />
    </Flex>
  );
};
