import React from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';

import {
  Logo,
  HeaderSearchBox,
  HeaderButtonGroup,
  HeaderProfileInfo,
} from '@/components/ui/atoms';

export const Header: React.FC = () => {
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
      <Logo w="64" />
      {isDesktop && <HeaderSearchBox />}
      <HeaderButtonGroup />
      <HeaderProfileInfo showProfileData={isDesktop} />
    </Flex>
  );
};
