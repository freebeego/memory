import styled from 'styled-components';

const ResultsTableButton = styled.button`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  background-color: unset;
  border-radius: 15px;
  border: 1px solid #000;
  width: 80px;
  height: 26px;
  box-sizing: border-box;
  padding: 0;
  border: unset;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }

  @media screen and (min-width: 768px) {
    width: 118px;
    height: 32px;
    font-size: 16px;
  }
`;

export default ResultsTableButton;
