import styled from 'styled-components';

const Error = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  visibility: ${props => props.isShown ? 'visible' : 'hidden'};
`;

export default Error;
