import { LaunchContainer } from '@containers/launch-container';
import Head from 'next/head';

export const Launches = () => {
  return (
    <>
      <Head>
        <title>Rocket science</title>
      </Head>

      <LaunchContainer />
    </>
  );
};
