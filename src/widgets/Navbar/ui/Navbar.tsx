import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Apple } from '@mui/icons-material';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar = memo((props: NavbarProps) => {
  const { onToggleSidebar } = props;
  return (
    <AppBar
      component="nav"
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          aria-label="open drawer"
          edge="start"
          color="inherit"
          onClick={onToggleSidebar}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
        >
          <Apple fontSize="large" />
        </Typography>
        <Box>
          <Button component={Link} to="/" sx={{ color: 'white' }}>
            Main
          </Button>
          <Button component={Link} to="/login" sx={{ color: 'white' }}>
            Login
          </Button>
          <Button component={Link} to="/register" sx={{ color: 'white' }}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
});
