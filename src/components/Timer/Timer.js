import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { tickTimer } from '../../store/timer/timerSlice';
import formatTimer from '../../utils/formatTimer';

const TimerElement = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 32px;
  width: 92px;
`;

function Timer() {
  const dispatch = useDispatch();

  const timer = useSelector((state) => state.timer);

  React.useEffect(
    () => {
      if (timer.isStarted) {
        const intervalId = setInterval(
          () => dispatch(tickTimer()),
          1000
        );

        return () => clearInterval(intervalId);
      }
    },
    [dispatch, timer.isStarted]
  );

  return (
    <TimerElement>
      {formatTimer(timer.delta)}
    </TimerElement>
  );
}

export default Timer;
