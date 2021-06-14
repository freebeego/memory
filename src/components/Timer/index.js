import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tickTimer } from '../../store/timer/timerSlice';
import formatTimer from '../../utils/formatTimer';
import { selectDelta, selectIsTimerStarted } from '../../store/timer/selectors';
import TimerElement from './TimerElement';

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

Timer.propTypes = {
  isTimerStarted: PropTypes.bool.isRequired,
  delta: PropTypes.number.isRequired,
  tickTimer: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
