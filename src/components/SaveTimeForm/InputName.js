import styled from 'styled-components';

const InputName = styled.input`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  padding: 0;
  margin-left: 10px;
  border: unset;
  border-bottom: 1px solid #000;
  outline: unset;
  box-sizing: border-box;
  width: 40%;

  &:focus {
    border-bottom-color: #f0f8ff;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export default InputName;
