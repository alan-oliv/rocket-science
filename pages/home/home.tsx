import Head from 'next/head';
import { HomeContainer } from '@containers/home';

const Home = () => {
  return (
    <>
      <Head>
        <title>Rocket science</title>
      </Head>

      <HomeContainer />
    </>
  );
};

export default Home;
