import React from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useColorMode,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        bgColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
        variant="filled"
        _placeholder={{
          color: colorMode === 'dark' ? 'gray.500' : 'gray.500',
        }}
        _focus={{
          borderColor: 'pink.500',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};
