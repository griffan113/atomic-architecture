import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript, theme } from '@chakra-ui/react';

export default class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </body>
      </Html>
    );
  }
}
