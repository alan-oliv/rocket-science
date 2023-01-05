import { SimpleGrid } from '@chakra-ui/react';
import { LaunchesPastFragment } from '../../../generated/graphql';
import { LaunchesListItem } from '../launches-list-item';

type Props = {
  launches: LaunchesPastFragment[];
};

export const LaunchesListView = ({ launches }: Props) => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(230px, 1fr))"
      >
        {launches.map((launch, i) => {
          return <LaunchesListItem key={i} launch={launch} />;
        })}
      </SimpleGrid>
    </>
  );
};
