import { LaunchContainer } from '@containers/launch-container';
import { CenteredListLayout } from '@layouts/centered-list-layout';
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

Launches.getLayout = (page: JSX.Element) => (
  <CenteredListLayout>{page}</CenteredListLayout>
);
