import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export const HeaderProfileInfo: React.FC = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eliel M. Gaspar</Text>
        <Text color="gray.300" fontSize="small">
          eliel@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Eliel"
        src="https://github.com/griffan113.png"
        bgColor="white"
      />
    </Flex>
  );
};
