import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { AppRoutesProps, routeConfig } from '../lib/routerConfig';

function AppRouter() {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback="">
        <Box>{route.element}</Box>
      </Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}
export default memo(AppRouter);
