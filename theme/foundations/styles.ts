import { colors } from './colors';

const styles = {
  global: () => ({
    body: {
      h: '100%',
      backgroundColor: colors.rocketShades[500],
      color: colors.rocketShades[100],
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
