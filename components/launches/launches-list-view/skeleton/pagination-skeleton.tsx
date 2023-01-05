import { Flex, Skeleton } from '@chakra-ui/react';

export const PaginationSkeleton = () => {
  return (
    <Flex justifyContent='space-between' py={5}>
      <Skeleton height='20px' w='40%' />
      <Skeleton height='20px' w='20%' />
    </Flex>
  );
};
