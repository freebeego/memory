import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  background-color: #f0f8ff;
  border-radius: 15px;
  border: 1px solid #000;
  width: 80px;
  height: 26px;
  box-sizing: border-box;
  padding: 0;

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

export default Button;
