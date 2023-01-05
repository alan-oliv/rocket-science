import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Icon,
  Skeleton,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';
import { VscCircleLargeFilled } from 'react-icons/vsc';

export const LaunchesListItemSkeleton = () => {
  return (
    <Card>
      <Box
        w='100%'
        h='250px'
        bgSize='cover'
        bgPosition='center center'
        bgRepeat='no-repeat'
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
        bgColor='rocketShades.600'
      />

      <CardHeader>
        <Stack>
          <Skeleton height='30px' w='80%' />
          <Skeleton height='15px' w='40%' />
        </Stack>
      </CardHeader>

      <CardBody>
        <SkeletonText mt='3' noOfLines={4} spacing='4' skeletonHeight='2' />
      </CardBody>

      <CardFooter justifyContent='end'>
        <HStack alignItems='center' spacing={5}>
          <Icon
            as={VscCircleLargeFilled}
            color='rocketShades.200'
            boxSize={3}
            cursor='pointer'
          />

          <Icon
            as={VscCircleLargeFilled}
            color='rocketShades.200'
            boxSize={3}
            cursor='pointer'
          />
        </HStack>
      </CardFooter>
    </Card>
  );
};
