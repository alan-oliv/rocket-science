import { extendTheme } from '@chakra-ui/theme-utils';
import { fonts } from './foundations/fonts';
import { styles } from './foundations/styles';

const rocketScienceTheme = extendTheme({
  fonts,
  styles,
});

export { rocketScienceTheme };
