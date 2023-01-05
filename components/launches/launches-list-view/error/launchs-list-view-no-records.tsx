import { HStack, StackDivider, Text } from '@chakra-ui/react';

export const LaunchesListViewNoRecords = () => {
  return (
    <HStack
      color='rocketShades.100'
      fontStyle='italic'
      spacing={5}
      divider={<StackDivider borderColor='gray.700' />}
    >
      <Text>
        No launches were found. Please try adjusting your search criteria and
        try again.
      </Text>
    </HStack>
  );
};
