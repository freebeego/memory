import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { shuffleCards } from '../store/cards/cardsSlice';
import { restartTimer, startTimer } from '../store/timer/timerSlice';
import Timer from './Timer/Timer';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 5vw;
`;

const Title = styled.h1`
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 900;
  font-size: 32px;
  margin: 0;
`;

const ResultsTableButton = styled.button`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  background-color: #f0f8ff;
  border-radius: 15px;
  border: 1px solid #000000;
  width: 133px;
  height: 35px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`;

const StartButton = styled.button`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #f0f8ff;
  border-radius: 15px;
  border: 1px solid #000000;
  width: 150px;
  height: 35px;
  box-sizing: border-box;
  margin: 0 auto;

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
  }

  & .front {
    transform: ${props => props.opened ? 'rotateY(360deg)' : 'rotateY(180deg)'};
  }

  & .back {
    transform: ${props => props.opened ? 'rotateY(180deg)' : 'none'};
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
  transition: 1s;
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
`;

function App() {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards);
  const timer = useSelector((state) => state.timer);

  function onStart() {
    if (!timer.isStarted) {
      dispatch(shuffleCards());
      dispatch(startTimer());
    } else {
      dispatch(shuffleCards());
      dispatch(restartTimer());
    }
  }

  return (
    <>
      <Header>
        <Title>
          Memory
        </Title>
        {timer.isStarted ? <Timer /> : ''}
        <ResultsTableButton>
          Results
        </ResultsTableButton>
      </Header>
      <StartButton onClick={onStart}>
        {!timer.isStarted ? 'start' : 'restart'}
      </StartButton>
        <GameContainer>
          {cards.map((image, index) =>
            <Card key={index}>
              <CardFront image={image} className="front" />
              <CardBack className="back" />
            </Card>
          )}
        </GameContainer>
    </>
  );
}

export default App;
