import { SimpleGrid } from '@chakra-ui/react';
import { LaunchesListItemSkeleton } from './launches-list-item-skeleton';

type Props = {
  items: number;
};

export const LaunchesListViewSkeleton = ({ items = 20 }: Props) => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns='repeat(auto-fill, minmax(230px, 1fr))'
      >
        {[...Array(items)].map((_, i) => {
          return <LaunchesListItemSkeleton key={i} />;
        })}
      </SimpleGrid>
    </>
  );
};
