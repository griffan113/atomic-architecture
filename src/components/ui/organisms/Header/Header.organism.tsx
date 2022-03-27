import React from 'react';
import { Flex } from '@chakra-ui/react';

import {
  Logo,
  HeaderSearchBox,
  HeaderButtonGroup,
  HeaderProfileInfo,
} from '@/components/ui/atoms';

export const Header: React.FC = () => {
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
      <HeaderSearchBox />
      <HeaderButtonGroup />
      <HeaderProfileInfo />
    </Flex>
  );
};
