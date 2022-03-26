import type { AppProps } from 'next/app';

import AppProvider from '../hooks';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default App;

export { getServerSideProps } from '../hooks/chakra';
