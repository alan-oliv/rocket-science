import { gql, useLazyQuery } from '@apollo/client';
import { LaunchesFilter } from '@components/launches/launches-filter';
import { LaunchesListView } from '@components/launches/launches-list-view';
import {
  LaunchesListViewSkeleton,
  PaginationSkeleton,
} from '@components/launches/launches-list-view/skeleton';
import { Pagination } from '@components/pagination';
import type {
  GetPastLaunchesQuery,
  GetPastLaunchesQueryVariables,
  LaunchesPastFragment,
} from '@generated/graphql';
import { useEffect, useState } from 'react';
import { LAUNCHES_PAST_FRAGMENT } from './fragment';

const GET_LAUNCHES = gql`
  query GetPastLaunchesQuery($limit: Int!, $offset: Int!, $mission: String) {
    launchesPast(
      limit: $limit
      offset: $offset
      find: { mission_name: $mission }
    ) {
      ...LaunchesPastFragment
    }
    launchesPastResult(find: { mission_name: $mission }) {
      result {
        totalCount
      }
    }
  }
  ${LAUNCHES_PAST_FRAGMENT}
`;

const DEFAULT_LAUNCHES_LIST_SIZE = 20;

export const LaunchContainer = () => {
  const [page, setSelectedPage] = useState<number>(1);
  const [listSize, setListSize] = useState<number>(DEFAULT_LAUNCHES_LIST_SIZE);
  const [missionName, setMissionName] = useState<string>('');

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

  const handleSearch = (missionName: string) => {
    setMissionName(missionName);
    setSelectedPage(1);
  };

  const handleChangeListSize = (listSize: number) => {
    setListSize(listSize);
    setSelectedPage(1);
  };

  useEffect(() => {
    pastLaunchesQuery({
      variables: {
        limit: listSize,
        offset: listSize * (page - 1),
        mission: missionName,
      },
    });
  }, [pastLaunchesQuery, missionName, page, listSize]);

  // due to Space-X schema, we need to filter out null values
  const pastLaunches: LaunchesPastFragment[] =
    (launchesData?.launchesPast &&
      (launchesData?.launchesPast.filter(
        (launch) => launch !== null,
      ) as LaunchesPastFragment[])) ||
    [];

  const totalRecords =
    launchesData?.launchesPastResult?.result?.totalCount || 0;

  if (errorReadingLaunches) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <LaunchesFilter onSearch={handleSearch} loading={isLoadingLaunches} />

      {isLoadingLaunches && (
        <>
          <PaginationSkeleton />
          <LaunchesListViewSkeleton items={listSize} />
        </>
      )}

      {!isLoadingLaunches && pastLaunches.length && (
        <>
          <Pagination
            listSize={listSize}
            onChangeListSize={handleChangeListSize}
            onChangePage={setSelectedPage}
            totalRecords={totalRecords}
            currentPage={page}
          />
          <LaunchesListView launches={pastLaunches} />
        </>
      )}
    </>
  );
};
