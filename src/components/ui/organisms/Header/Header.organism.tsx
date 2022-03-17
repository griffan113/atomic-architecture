import React from 'react';
import { Flex } from '@chakra-ui/react';

import { Logo, HeaderSearchBox } from '@/components/ui/atoms';

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
      <Logo />
      <HeaderSearchBox />
    </Flex>
  );
};
