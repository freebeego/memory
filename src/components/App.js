import React from 'react';
import styled from 'styled-components';
import { images } from '../config/constants';
import shuffle from '../utils/shuffle';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
`;

const Title = styled.h1`
  margin: 0;
`;

const ResultsTable = styled.button`
  background: none;
  border-radius: 15px;
  border: 1px solid #000000;
  width: 150px;
  height: 35px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`;

const GameContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(6, 10vw);
  grid-auto-rows: 1fr;
  gap: 10px;
`;

const Card = styled.div`
  position: relative;
  height: 10vh;
  perspective: 30vw;

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const CardFront = styled.div`
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f8ff;
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: 1s;

  .card:hover & {
    transform: rotateY(360deg);
  }
`;

const CardBack = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
  transition: 1s;

  .card:hover & {
    transform: rotateY(180deg);
  }
`;

function App() {
  return (
    <>
      <Header>
        <Title>
          Memory
        </Title>
        <ResultsTable>
          Results
        </ResultsTable>
      </Header>
        <GameContainer>
          {shuffle(images.concat(images)).map((image, index) =>
            <Card key={index} className="card">
              <CardFront image={image} />
              <CardBack />
            </Card>
          )}
        </GameContainer>
    </>
  );
}

export default App;
