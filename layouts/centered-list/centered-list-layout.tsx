import { Box, Center } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export const CenteredListLayout = ({ children }: Props) => {
  return (
    <Center
      bgImage='/list-bg.png'
      bgRepeat='no-repeat'
      bgSize='70%'
      bgAttachment='fixed'
      bgPosition='left 170px'
      w='100%'
    >
      <Box maxWidth='1080px' pb='80px' w='90%' minH='100vh'>
        {children}
      </Box>
    </Center>
  );
};
