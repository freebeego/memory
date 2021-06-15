import styled from 'styled-components';

const CardsList = styled.ul`
  margin: 40px auto auto;
  display: grid;
  grid-template-columns: repeat(6, 12vw);
  grid-auto-rows: 12vw;
  gap: 10px;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(6, 10vw);
    grid-auto-rows: 10vw;
    gap: 10px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 102px);
    grid-auto-rows: 102px;
    gap: 10px;
  }
`;

export default CardsList;
