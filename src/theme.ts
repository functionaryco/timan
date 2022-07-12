import { swiss, deep } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

const theme: Theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
        tint: 'blue',
        intt: 'red',
      },
    },
    tint: 'red',
    intt: 'blue',
  },
  forms: {
    input: {
      border: 0,
      px: 2,
      py: 1,
      bg: 'primary'
    },
    label: {
      color: 'gray.6',
      fontSize: 1,
      fontWeight: 500,
      pb: 0,
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4,
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
    },
  },
  links: {
    nav: {
      fontFamily: 'body',
    },
  },
};

export default theme;
