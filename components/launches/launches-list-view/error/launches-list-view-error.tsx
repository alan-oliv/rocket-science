import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';

export const LaunchesListViewError = () => {
  return (
    <Box h='100vh' w='100%'>
      <Container textAlign='center' p='80px 40px'>
        <VStack spacing={5}>
          <Image src='./something-wrong.png' alt='Error image' width='100%' />

          <Heading fontStyle='italic' letterSpacing='-0.2rem'>
            MayDay!
          </Heading>

          <Text fontStyle='italic'>
            Oh no! Something went wrong while trying to fetch SpaceX launches.
            Please check your internet connection and try again later.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};
