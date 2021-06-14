import styled from 'styled-components';
import plus from '../../images/plus.svg';

const CloseButton = styled.button`
  background-color: unset;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: unset;
  padding: 0;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`;

export default CloseButton;
