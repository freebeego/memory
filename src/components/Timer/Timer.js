import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { tickTimer } from '../../store/timer/timerSlice';
import formatTimer from '../../utils/formatTimer';
import { selectDelta, selectIsTimerStarted } from '../../store/timer/selectors';

const TimerElement = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 32px;
  width: 92px;
`;

function Timer({ isTimerStarted, delta, tickTimer }) {
  React.useEffect(
    () => {
      if (isTimerStarted) {
        const intervalId = setInterval(
          () => tickTimer(),
          1000
        );

        return () => clearInterval(intervalId);
      }
    },
    [isTimerStarted, tickTimer]
  );

  return (
    <TimerElement>
      {formatTimer(delta)}
    </TimerElement>
  );
}

const mapStateToProps = (state) => ({
  isTimerStarted: selectIsTimerStarted(state),
  delta: selectDelta(state)
});

const mapDispatchToProps = (dispatch) => ({
  tickTimer: () => dispatch(tickTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
