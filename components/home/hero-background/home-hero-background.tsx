import { Box, Center } from '@chakra-ui/layout';

type Props = {
  children: React.ReactNode;
};

export const HomeHeroBackground = ({ children }: Props) => {
  return (
    <Center w="100%" h="100%">
      <Box
        h="100%"
        maxW="1080px"
        bgImage="/home-bg.png"
        bgRepeat="no-repeat"
        w={{ base: '100%', sm: '80%' }}
        bgPosition={{ base: '-530px 0px', md: 'right top' }}
      >
        {children}
      </Box>
    </Center>
  );
};
