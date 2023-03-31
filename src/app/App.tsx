import { Suspense, useState } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Box, Container, Toolbar } from '@mui/material';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/AppRouter';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box className="App" sx={{ display: 'flex' }}>
      <Suspense fallback="">
        <Navbar onToggleSidebar={onToggleSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Container
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${240}px)` }, // todo add this to a variable
          }}
        >
          <Toolbar />
          <AppRouter />
        </Container>
      </Suspense>
    </Box>
  );
}

export default App;
