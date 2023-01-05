import { LaunchContainer } from '@containers/launch';
import { CenteredListLayout } from '@layouts/centered-list';

import Head from 'next/head';

const Launches = () => {
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

export default Launches;
