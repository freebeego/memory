import styled from 'styled-components';
import { TRANSITION_TIME } from '../../config/constants';

const CardBack = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  transition: transform ${String(TRANSITION_TIME)}s;
`;

export default CardBack;
