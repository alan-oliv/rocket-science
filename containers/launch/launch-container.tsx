import { gql, useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import type {
  GetPastLaunchesQuery,
  GetPastLaunchesQueryVariables,
  LaunchesPastFragment,
} from '@generated/graphql';
import { LAUNCHES_PAST_FRAGMENT } from './fragment';
import { LaunchesListView } from '@components/launches/launches-list-view';

const GET_LAUNCHES = gql`
  query GetPastLaunchesQuery($limit: Int!) {
    launchesPast(limit: $limit) {
      ...LaunchesPastFragment
    }
  }
  ${LAUNCHES_PAST_FRAGMENT}
`;

const DEFAULT_LAUNCHES_LIST_SIZE = 20;

export const LaunchContainer = () => {
  const [listSize, setListSize] = useState<number>(DEFAULT_LAUNCHES_LIST_SIZE);
  const [
    pastLaunchesQuery,
    {
      data: launchesData,
      loading: isLoadingLaunches,
      error: errorReadingLaunches,
    },
  ] = useLazyQuery<GetPastLaunchesQuery, GetPastLaunchesQueryVariables>(
    GET_LAUNCHES,
    {
      fetchPolicy: 'no-cache',
    },
  );

  // due to Space-X schema, we need to filter out null values
  const pastLaunches: LaunchesPastFragment[] =
    (launchesData?.launchesPast &&
      (launchesData?.launchesPast.filter(
        (launch) => launch !== null,
      ) as LaunchesPastFragment[])) ||
    [];

  useEffect(() => {
    pastLaunchesQuery({
      variables: {
        limit: listSize,
      },
    });
  }, [pastLaunchesQuery, listSize]);

  if (errorReadingLaunches) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {!isLoadingLaunches && (
        <>
          <LaunchesListView launches={pastLaunches} />
        </>
      )}
    </>
  );
};
