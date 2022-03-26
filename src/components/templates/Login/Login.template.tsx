import { Flex } from '@chakra-ui/react';
import React from 'react';

import { LoginForm } from '@/components/ui/molecules/';

export const LoginTemplate: React.FC = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <LoginForm />
    </Flex>
  );
};
