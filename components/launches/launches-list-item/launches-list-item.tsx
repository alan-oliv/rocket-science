import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Icon,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import type { LaunchesPastFragment } from '@generated/graphql';
import { TfiBook, TfiControlPlay } from 'react-icons/tfi';

type Props = {
  launch: LaunchesPastFragment;
};

export const LaunchesListItem = ({ launch }: Props) => {
  const placeholderImage = './placeholder-image.png';

  const image =
    launch?.links?.flickr_images?.length && launch?.links?.flickr_images[0];

  const date = new Date(launch.launch_date_utc).toDateString();

  return (
    <Card>
      <Box
        w='100%'
        h='250px'
        bgImage={image || placeholderImage}
        bgSize='cover'
        bgPosition='center center'
        bgRepeat='no-repeat'
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
      />

      <CardHeader pb={0}>
        <Heading size='sm' noOfLines={1}>
          {launch.mission_name}
        </Heading>

        <Text size='xs'>
          <Badge>{launch.rocket?.rocket_name}</Badge>
        </Text>
      </CardHeader>

      <CardBody fontSize='sm'>
        <Text size='sm' noOfLines={4}>
          {launch.details || 'No details provided'}
        </Text>

        <Box fontSize='xs' pt={5}>
          <HStack alignItems='center' spacing={5}>
            <Text size='xs'>Launched on {date}</Text>
          </HStack>
        </Box>
      </CardBody>

      <CardFooter justifyContent='end'>
        <HStack alignItems='center' spacing={5}>
          {launch.links?.article_link && (
            <Tooltip
              label='Open external article'
              hasArrow
              placement='start'
              shouldWrapChildren
            >
              <a
                href={launch.links?.article_link}
                target='_blank'
                rel='noreferrer'
              >
                <Icon as={TfiBook} boxSize={4} cursor='pointer' />
              </a>
            </Tooltip>
          )}

          {launch.links?.video_link && (
            <Tooltip
              label='Open external video'
              hasArrow
              placement='start'
              shouldWrapChildren
            >
              <a
                href={launch.links?.video_link}
                target='_blank'
                rel='noreferrer'
              >
                <Icon as={TfiControlPlay} boxSize={4} cursor='pointer' />
              </a>
            </Tooltip>
          )}
        </HStack>
      </CardFooter>
    </Card>
  );
};
