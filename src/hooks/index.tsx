import React from 'react';

import { ChakraProvider } from './chakra';

const AppProvider: React.FC<any> = ({ children, ...pageProps }) => {
  return (
    <ChakraProvider cookies={pageProps.cookies}>{children}</ChakraProvider>
  );
};

export default AppProvider;
