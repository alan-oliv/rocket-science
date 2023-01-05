import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

const extendedTheme = extendTheme({
  fonts: {
    heading: `Anybody, sans-serif`,
    body: `PT Sans, sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        h: '100%',
        backgroundColor: '#0C0C13',
      },
      html: {
        h: '100%',
      },
      '#__next': {
        h: '100%',
      },
    }),
  },
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ChakraProvider theme={extendedTheme}>
      <Component {...pageProps} />
    </ChakraProvider>,
  );
};

export default App;
