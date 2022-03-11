import {
  Flex,
  FormLabel,
  Input,
  Stack,
  FormControl,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const LoginFormOrganism: React.FC = () => {
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
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: 'gray.900',
            }}
            size="lg"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: 'gray.900',
            }}
            size="lg"
          />
        </FormControl>
      </Stack>
      <Button type="submit" mt="6" colorScheme="pink" size="lg">
        Submit
      </Button>
    </Flex>
  );
};

export default LoginFormOrganism;
