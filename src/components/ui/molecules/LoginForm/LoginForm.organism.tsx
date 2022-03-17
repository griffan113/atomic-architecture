import { Flex, Stack, Button } from '@chakra-ui/react';
import React from 'react';

import { Input } from '@/src/components/ui/atoms';

export const LoginFormOrganism: React.FC = () => {
  return (
    <Flex
      as="form"
      w="100%"
      p="8"
      maxWidth="360"
      bg="gray.800"
      borderRadius={8}
      flexDir="column"
    >
      <Stack spacing="4">
        <Input name="email" type="email" label="E-mail" />
        <Input name="password" type="password" label="Password" />
      </Stack>
      <Button type="submit" mt="6" colorScheme="pink" size="lg">
        Submit
      </Button>
    </Flex>
  );
};
