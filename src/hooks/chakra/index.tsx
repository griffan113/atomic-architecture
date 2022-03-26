import React from 'react';
import {
  ChakraProvider as Chakra,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';

import { theme } from '@/src/styles/theme';

type ChakraProviderProps = {
  cookies: string;
};

export const ChakraProvider: React.FC<ChakraProviderProps> = ({
  cookies,
  children,
}) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <Chakra theme={theme} colorModeManager={colorModeManager}>
      {children}
    </Chakra>
  );
};

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
