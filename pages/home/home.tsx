import Head from 'next/head';
import { HomeContainer } from '../../containers/home';

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
