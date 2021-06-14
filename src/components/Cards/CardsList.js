import styled from 'styled-components';

const CardsList = styled.ul`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(6, 10vw);
  grid-auto-rows: 1fr;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

export default CardsList;
