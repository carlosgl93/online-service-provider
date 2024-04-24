import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { Themes } from './types';

const sharedTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#CCAD00', // dorado
      contrastText: '#743F2F', // cafe
    },
    secondary: {
      main: '#743F2F',
    },
    background: {
      default: '#FEFAE0',
      paper: '#ffffff',
    },
    success: {
      main: '#00ee9d',
    },
    info: {
      main: '#743F2F',
    },
    warning: {
      main: '#ea8600',
    },
    error: {
      main: '#ff8ca3',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          color: '#743F2F',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FEFAE0',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
} as ThemeOptions;

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#ffffe1',
        paper: '#ffffff',
      },
      primary: {
        main: '#CCAD00', // dorado
        contrastText: '#743F2F', // cafe
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        main: '#333',
      },
    },
  }),
};

export default themes;
