import { ChakraProps, Text } from '@chakra-ui/react';
import React from 'react';

type LogoProps = ChakraProps;

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Text {...props} fontSize="3xl" fontWeight="bold" letterSpacing="tight">
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
};
