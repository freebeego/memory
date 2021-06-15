import styled from 'styled-components';

const Error = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 14px;
  visibility: ${props => props.isShown ? 'visible' : 'hidden'};
  color: #f00;
`;

export default Error;
