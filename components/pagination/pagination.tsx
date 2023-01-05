import {
  Box,
  Button,
  Flex,
  HStack,
  Select,
  StackDivider,
  Text,
} from '@chakra-ui/react';

type Props = {
  currentPage: number;
  listSize: number;
  totalRecords: number;
  onChangePage: (page: number) => void;
  onChangeListSize: (listSize: number) => void;
};

export const Pagination = ({
  totalRecords,
  currentPage,
  listSize,
  onChangePage,
  onChangeListSize,
}: Props) => {
  const totalPages = Math.ceil(totalRecords / listSize);
  const from = currentPage * listSize - listSize + 1;
  const to = currentPage * listSize;

  return (
    <Flex justifyContent='space-between' py={5}>
      <HStack
        color='rocketShades.100'
        fontStyle='italic'
        spacing={5}
        divider={<StackDivider borderColor='gray.700' />}
      >
        <Box display={{ base: 'none', md: 'inherit' }}>
          <Text>
            {`Launch ${from} - ${
              to > totalRecords ? totalRecords : to
            } of ${totalRecords} results`}
          </Text>

          <HStack spacing={0}>
            <Text pr={2}>Showing </Text>
            <Select
              textAlign='center'
              variant='unstyled'
              size='sm'
              w='50px'
              value={listSize}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                onChangeListSize(Number(e.target.value));
              }}
            >
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
              <option value='50'>50</option>
            </Select>
            <Text>per page</Text>
          </HStack>
        </Box>
      </HStack>

      <HStack spacing={1}>
        {[...Array(totalPages)].map((_, i) => {
          const currentIndex = i + 1;
          const isSelected = currentIndex === currentPage;

          return (
            <Button
              key={i}
              size='xs'
              minW='28px'
              variant={isSelected ? 'outline' : 'solid'}
              onClick={() => onChangePage(currentIndex)}
            >
              {currentIndex}
            </Button>
          );
        })}
      </HStack>
    </Flex>
  );
};
