import { Button } from '@chakra-ui/button';
import { TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Container, Text, VStack } from '@chakra-ui/layout';
import NextLink from 'next/link';

export const HomeHeroText = () => {
  return (
    <VStack
      h='100%'
      pt='160px'
      alignItems={{ base: 'flex-start', md: 'flex-end' }}
      justifyContent='flex-start'
      pr={{ base: 0, md: '202px' }}
      pl={{ base: '98px', md: 0 }}
    >
      <VStack alignItems='flex-start' spacing={5}>
        <Box>
          <Container p={0} pb={4} maxW='250' fontSize='sm'>
            <Text align='left'>
              Whether you are an <strong>aerospace enthusiast</strong> or simply
              interested in the latest space exploration, this is something for
              you.
            </Text>

            <Text pt={4} fontSize='xs' align='left' fontStyle='italic'>
              Also, this is a tech assessment for <strong>Archie</strong>,
              developed by <strong>Alan Oliveira</strong>.
            </Text>
          </Container>

          <NextLink href='/launches' passHref>
            <Button
              colorScheme='blackAlpha'
              size='xs'
              alignItems='center'
              justifyContent='center'
              rightIcon={<TriangleUpIcon />}
            >
              <Box pt='2px'>Launch</Box>
            </Button>
          </NextLink>
        </Box>
      </VStack>
    </VStack>
  );
};
