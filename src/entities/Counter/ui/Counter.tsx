import { memo, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getCounterValue } from '../model/selectors/counter';
import { counterActions } from '../model/slice/CounterSlice';

interface CounterProps {
  className?: string;
}

export const Counter = memo((props: CounterProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <Typography variant="h1" data-testid="value-title">
        {value}
      </Typography>
      <Button
        variant="contained"
        data-testid="increment-btn"
        onClick={increment}
      >
        increment
      </Button>
      <Button
        variant="contained"
        data-testid="decrement-btn"
        onClick={decrement}
      >
        decrement
      </Button>
    </div>
  );
});
