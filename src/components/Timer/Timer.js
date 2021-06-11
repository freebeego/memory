import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { tickTimer } from '../../store/timer/timerSlice';

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
    [dispatch, timer.start, timer.isStarted]
  );

  function formatTimer(seconds) {
    const min = `0${Math.floor(seconds / 60)}`.slice(-2);
    const sec = `0${seconds < 60 ? seconds : seconds % 60}`.slice(-2);

    return `${min}:${sec}`;
  }

  return (
    <TimerElement>
      {formatTimer(timer.delta)}
    </TimerElement>
  );
}

export default Timer;
