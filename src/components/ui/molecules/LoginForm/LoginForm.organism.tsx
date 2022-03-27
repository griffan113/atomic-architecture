import { Flex, Stack, Button } from '@chakra-ui/react';
import React from 'react';

import { Input } from '@/src/components/ui/atoms';

export const LoginForm: React.FC = () => {
  return (
    <Flex as="form" w="100%" flexDir="column">
      <Stack spacing="4">
        <Input placeholder="E-mail" name="email" type="email" />
        <Input placeholder="Password" name="password" type="password" />
      </Stack>
      <Button type="submit" mt="6" colorScheme="pink" size="lg">
        Sign In
      </Button>
    </Flex>
  );
};
