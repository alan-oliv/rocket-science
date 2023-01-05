import { SimpleGrid } from '@chakra-ui/react';
import { LaunchesListItemSkeleton } from './launches-list-item-skeleton';

export const LaunchesListViewSkeleton = () => {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(230px, 1fr))"
      >
        {[...Array(10)].map((_, i) => {
          return <LaunchesListItemSkeleton key={i} />;
        })}
      </SimpleGrid>
    </>
  );
};
