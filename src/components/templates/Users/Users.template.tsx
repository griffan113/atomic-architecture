import React from 'react';
import {
  useColorMode,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { RiAddLine, RiUserFill } from 'react-icons/ri';

import { Header, Sidebar } from '@/components/ui/organisms';
import { UsersListTable, Pagination } from '@/components/ui/atoms';

export const UsersTemplate: React.FC = () => {
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
          <Flex mb="8" justify="space-between" align="center">
            <HStack>
              <Icon as={RiUserFill} fontSize="25" />
              <Heading size="lg" fontWeight="normal">
                Users
              </Heading>
            </HStack>
            <Button
              as="a"
              cursor="pointer"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Create New
            </Button>
          </Flex>
          <UsersListTable />
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};
