import { memo, useContext } from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from 'app/providers/ThemeProvider';
import { LS_THEME_MODE_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { mode, setMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode?.(newMode);
    localStorage.setItem(LS_THEME_MODE_KEY, newMode);
  };

  return (
    <div>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
});
