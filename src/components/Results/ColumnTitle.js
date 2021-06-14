import styled from 'styled-components';

const ColumnTitle = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 4px;
  text-align: center;
  width: 100%;

  &:first-of-type {
    border-right: 1px solid #000;
    border-bottom: 2px solid #000;
  }

  &:last-of-type {
    border-left: 1px solid #000;
    border-bottom: 2px solid #000;
  }
`;

export default ColumnTitle;
