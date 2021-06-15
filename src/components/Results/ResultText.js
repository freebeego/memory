import styled from 'styled-components';

const ResultText = styled.span`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 18px;
  text-align: center;
  color: ${props => props.current ? '#f00' : '#000'};
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 0;
  width: calc((100% / 2) - 1px);

  &:first-of-type {
    border-right: 1px solid #000;
  }

  &:last-of-type {
    border-left: 1px solid #000;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export default ResultText;
