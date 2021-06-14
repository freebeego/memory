import React from 'react';
import PropTypes from 'prop-types';
import formatTimer from '../../utils/formatTimer';
import { connect } from 'react-redux';
import { selectDelta } from '../../store/timer/selectors';
import YourTimeElement from './YourTimeElement';

function YourTime({ delta }) {
  return (
    <>
      <YourTimeElement>
        {`Your time is ${formatTimer(delta)}`}
      </YourTimeElement>
    </>
  );
}

const mapStateToProps = (state) => ({
  delta: selectDelta(state)
});

YourTime.propTypes = {
  delta: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(YourTime);
