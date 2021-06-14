import styled from 'styled-components';
import { TRANSITION_TIME } from '../../config/constants';

const CardFront = styled.div`
  background-image: url('${(props) => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f8ff;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  transition: transform ${String(TRANSITION_TIME)}s, visibility;
`;

export default CardFront;
