import styled from 'styled-components';
import formatTimer from '../../utils/formatTimer';
import { useSelector } from 'react-redux';

const YourTimeElement = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 25px;
`;

function YourTime() {
  const delta = useSelector((state) => state.timer.delta);

  return (
    <>
      <YourTimeElement>
        {`Your time is ${formatTimer(delta)}`}
      </YourTimeElement>
    </>
  );
}

export default YourTime;
