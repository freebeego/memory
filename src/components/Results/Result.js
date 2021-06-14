import styled from 'styled-components';

const Result = styled.li`
  display: flex;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  &:first-of-type {
    border-top: unset;
  }

  &:last-of-type {
    border-bottom: unset;
  }
`;

export default Result;
