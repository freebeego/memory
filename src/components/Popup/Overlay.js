import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${(props) => props.isOpen ? 1 : 0};
  transition: opacity .4s;
`;

export default Overlay;
