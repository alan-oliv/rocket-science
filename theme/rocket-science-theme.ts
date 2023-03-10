import { extendTheme } from '@chakra-ui/theme-utils';
import { foundations } from './foundations';
import { components } from './components';

const rocketScienceTheme = extendTheme({
  ...foundations,
  components,
});

export { rocketScienceTheme };
