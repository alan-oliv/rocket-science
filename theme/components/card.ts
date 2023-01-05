import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    color: 'white',
    backgroundColor: 'rocketShades.400',
  },
});

const Card = defineMultiStyleConfig({ baseStyle });

export { Card };
