import { Box, Flex, HStack, Icon, Input, Progress } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import { TfiSearch } from 'react-icons/tfi';

type Props = {
  onSearch: (missionName: string) => void;
  loading: boolean;
};

export const LaunchesFilter = ({ onSearch, loading }: Props) => {
  const debouncedSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }, 350);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debouncedSearch(e);
    },
    [debouncedSearch],
  );

  return (
    <Box w='100%' py={10}>
      <Flex
        w='100%'
        h='20px'
        py={10}
        px={5}
        bgColor='rocketShades.300'
        borderRadius={10}
        fontSize={20}
        alignItems='center'
        justifyContent='center'
      >
        <HStack
          w='100%'
          spacing={8}
          alignItems='center'
          justifyContent='center'
        >
          <Icon as={TfiSearch} color='rocketShades.200' boxSize={8} />
          <Input
            w='93%'
            placeholder='Search a space mission'
            border='none'
            fontSize='3xl'
            color='white'
            _placeholder={{ color: 'rocketShades.200' }}
            onChange={handleOnChange}
          />
        </HStack>
      </Flex>
      <Box h='2px' px='6px'>
        {loading && (
          <Progress
            h='100%'
            isIndeterminate
            backgroundColor='transparent'
            colorScheme='gray'
          />
        )}
      </Box>
    </Box>
  );
};
