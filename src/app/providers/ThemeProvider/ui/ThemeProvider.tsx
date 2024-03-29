import { ReactNode, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { LS_THEME_MODE_KEY, ThemeContext } from '../lib/ThemeContext';
import { lightTheme } from '../lib/themes/light/lightTheme';
import { darkTheme } from '../lib/themes/dark/darkTheme';

const defaultMode =
  (localStorage.getItem(LS_THEME_MODE_KEY) as PaletteMode) || 'light';

interface ThemeProviderProps {
  initialMode?: PaletteMode;
  children: ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { initialMode, children } = props;
  const [mode, setMode] = useState<PaletteMode>(initialMode || defaultMode);

  const defaultProps = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode]
  );

  const theme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme;
  }, [mode]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
