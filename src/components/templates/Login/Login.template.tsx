import {
  Divider,
  Flex,
  Stack,
  Text,
  useColorMode,
  Link as ChakraLink,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

import { LoginForm } from '@/components/ui/molecules/';
import { Logo } from '@/components/ui/atoms';

export const LoginTemplate: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Stack
        spacing="5"
        as="section"
        w="100%"
        p={['5', '10']}
        ml={['5', 0]}
        mr={['5', 0]}
        maxWidth={['100%', '400']}
        bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="3" align="center">
          <Logo />
          <Text fontSize="xl" fontWeight="bold">
            Log in to your account
          </Text>
          <Text fontSize="sm" fontWeight="normal">
            Don&apos;t have an account?{' '}
            <ChakraLink color="teal.500">
              <Link href="/signup">Sign Up</Link>
            </ChakraLink>
          </Text>
        </Stack>
        <LoginForm />
        <Divider />
        <Button leftIcon={<FcGoogle />}>Sign In with Google</Button>
      </Stack>
    </Flex>
  );
};
