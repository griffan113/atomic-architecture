import { Flex } from '@chakra-ui/react';
import React from 'react';

import LoginFormOrganism from '@/src/ui/components/organisms/LoginForm/LoginForm.organism';

export const LoginTemplate: React.FC = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <LoginFormOrganism />
    </Flex>
  );
};