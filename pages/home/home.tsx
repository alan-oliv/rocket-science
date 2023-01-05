import Head from 'next/head';
import { HomeContainer } from '@containers/home';
import { AnimatePresenceLayout } from '@layouts/animate-presence';

export const Home = () => {
  return (
    <>
      <Head>
        <title>Rocket science</title>
      </Head>

      <HomeContainer />
    </>
  );
};
