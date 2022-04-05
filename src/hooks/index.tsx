import React from 'react';

import { ChakraProvider } from './chakra';
import { DrawerProvider } from './drawer';

const AppProvider: React.FC<any> = ({ children, ...pageProps }) => {
  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <DrawerProvider>{children}</DrawerProvider>
    </ChakraProvider>
  );
};

export default AppProvider;
