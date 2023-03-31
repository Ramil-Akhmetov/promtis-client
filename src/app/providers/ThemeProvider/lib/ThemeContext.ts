import { createContext } from 'react';
import { PaletteMode } from '@mui/material';

export interface ThemeContextProps {
  mode?: PaletteMode;
  setMode?: (theme: PaletteMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LS_THEME_MODE_KEY = 'LS_THEME_MODE_KEY';
