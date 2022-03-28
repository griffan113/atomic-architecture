import React from 'react';

import {
  Box,
  Flex,
  Heading,
  Icon,
  HStack,
  useColorMode,
  Divider,
  VStack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { RiUserAddFill } from 'react-icons/ri';

import { Header, Sidebar } from '@/components/ui/organisms';
import { Input } from '@/components/ui/atoms';

export const CreateUserTemplate: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
          p="8"
        >
          <HStack>
            <Icon as={RiUserAddFill} fontSize="25" />
            <Heading size="lg" fontWeight="normal">
              Create User
            </Heading>
          </HStack>
          <Divider
            my="6"
            borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
          />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Full Name" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Password" />
              <Input
                name="password_confirmation"
                type="password"
                label="Password Confirmation"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack>
              <Button
                bg={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
                color={colorMode === 'dark' ? 'white' : 'gray.700'}
              >
                Cancelar
              </Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
