import styled from 'styled-components';
import CardBack from './CardBack';

const CardFront = styled(CardBack)`
  background-color: #f0f8ff;
  background-image: url('${(props) => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #000;
  box-sizing: border-box;
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  backface-visibility: hidden;
`;

export default CardFront;
