import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../../src/app/providers/ThemeProvider/lib/themes/light/lightTheme';
import { darkTheme } from '../../src/app/providers/ThemeProvider/lib/themes/dark/darkTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
