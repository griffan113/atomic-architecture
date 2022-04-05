import React from 'react';
import {
  useColorMode,
  Box,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Checkbox,
  Td,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

export const UsersListTable = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Table colorScheme={colorMode === 'dark' ? 'gray' : 'blackAlpha'}>
      <Thead>
        <Tr>
          <Th px={['4', '4', '6']} color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>User</Th>
          {isDesktop && <Th>Created At</Th>}
          <Th width="3"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {new Array(3).fill(0).map((_, index) => (
          <Tr key={index}>
            <Td px={['4', '4', '6']}>
              <Checkbox colorScheme="pink" />
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold">Eliel M. Gaspar</Text>
                <Text fontSize="sm" color="gray.300">
                  eliel@gmail.com
                </Text>
              </Box>
            </Td>
            {isDesktop && <Td>28 de Março de 2022</Td>}
            <Td>
              <Button
                as="a"
                cursor="pointer"
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                leftIcon={isDesktop && <Icon as={RiPencilLine} fontSize="20" />}
              >
                {isDesktop ? 'Edit' : <Icon as={RiPencilLine} fontSize="20" />}
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
