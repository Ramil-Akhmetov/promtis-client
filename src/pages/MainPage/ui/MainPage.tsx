import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { css } from '@emotion/react';
import { Counter } from 'entities/Counter';

function MainPage() {
  return (
    <Box
      css={css`
        color: red;
      `}
    >
      <Typography variant="h1">asdfsdf</Typography>
      <Counter />
    </Box>
  );
}

export default memo(MainPage);
