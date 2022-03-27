import React from 'react';
import { Flex, Icon, Input, useColorMode } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export const HeaderSearchBox: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bgColor={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
      borderRadius="full"
    >
      <Input
        color={colorMode === 'dark' ? 'gray.300' : 'gray.500'}
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search in the platform..."
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
};
