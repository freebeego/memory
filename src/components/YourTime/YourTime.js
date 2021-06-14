import styled from 'styled-components';
import formatTimer from '../../utils/formatTimer';
import { connect } from 'react-redux';
import { selectDelta } from '../../store/timer/selectors';

const YourTimeElement = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 25px;
`;

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

export default connect(mapStateToProps)(YourTime);
