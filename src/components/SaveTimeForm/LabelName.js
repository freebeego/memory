import styled from 'styled-components';

const LabelName = styled.label`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export default LabelName;
