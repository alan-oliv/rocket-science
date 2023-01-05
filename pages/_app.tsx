import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { rocketScienceTheme } from '@theme';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { AnimatePresenceLayout } from '@layouts/animate-presence';
import createApolloClient from 'services/apollo-client/apollo.client';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const client = createApolloClient();

  return getLayout(
    <AnimatePresenceLayout>
      <ApolloProvider client={client}>
        <ChakraProvider theme={rocketScienceTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </AnimatePresenceLayout>,
  );
};

export default App;
