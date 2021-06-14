import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { tickTimer } from '../../store/timer/timerSlice';
import formatTimer from '../../utils/formatTimer';
import { selectDelta, selectIsTimerStarted } from '../../store/timer/selectors';

const TimerElement = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 32px;
  width: 92px;
`;

function Timer() {
  const dispatch = useDispatch();

  const isTimerStarted = useSelector(selectIsTimerStarted);
  const delta = useSelector(selectDelta);

  React.useEffect(
    () => {
      if (isTimerStarted) {
        const intervalId = setInterval(
          () => dispatch(tickTimer()),
          1000
        );

        return () => clearInterval(intervalId);
      }
    },
    [dispatch, isTimerStarted]
  );

  return (
    <TimerElement>
      {formatTimer(delta)}
    </TimerElement>
  );
}

export default Timer;
