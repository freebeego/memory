import styled from 'styled-components';

const Card = styled.li`
  position: relative;
  height: 10vh;
  perspective: 30vw;
  background-color: #f0f8ff;

  &:hover {
    cursor: ${(props) => props.isOpen ? 'unset' : 'pointer'};
  }

  & .front {
    transform: ${(props) => props.isOpen ? 'rotateY(360deg)' : 'rotateY(180deg)'};
  }

  & .back {
    transform: ${(props) => props.isOpen ? 'rotateY(180deg)' : 'none'};
  }
`;

export default Card;
