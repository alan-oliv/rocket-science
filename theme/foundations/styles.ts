import { StyleFunctionProps } from '@chakra-ui/styled-system';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      h: '100%',
      backgroundColor: '#0C0C13',
    },
    html: {
      h: '100%',
    },
    '#__next': {
      h: '100%',
    },
  }),
};

export { styles };
