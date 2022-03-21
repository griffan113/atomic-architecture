import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import React from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _focus={{
          bgColor: 'gray.800',
        }}
        _hover={{
          bgColor: 'gray.800',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};
