import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const bigSearch = definePartsStyle({
  field: {
    fontFamily: 'Fira Sans Condensed, sans-serif',
    letterSpacing: '-0.03em',
    fontSize: '4xl',
    fontWeight: '300',
    background: 'transparent',
    color: 'white',
    _placeholder: {
      color: 'white',
      fontStyle: 'italic',
      opacity: 0.1,
    },
  },
});

const Input = defineMultiStyleConfig({
  variants: { bigSearch },
});

export { Input };
