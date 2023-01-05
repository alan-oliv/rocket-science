import { ChakraProvider } from '@chakra-ui/react';
import { rocketScienceTheme } from '@theme';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { AnimatePresenceLayout } from '@layouts/animate-presence';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AnimatePresenceLayout>
      <ChakraProvider theme={rocketScienceTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresenceLayout>,
  );
};

export default App;
