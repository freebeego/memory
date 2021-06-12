import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { hideAllCards, shuffleCards, startGame } from '../store/game/gameSlice';
import { startTimer } from '../store/timer/timerSlice';
import Timer from './Timer/Timer';
import Cards from './Cards/Cards';

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

function App() {
  const dispatch = useDispatch();

  const gameWasStarted = useSelector((state) => state.game.wasStarted);

  function onStart() {
    if (!gameWasStarted) {
      dispatch(startGame());
    } else {
      dispatch(hideAllCards());
    }

    dispatch(startTimer());
    dispatch(shuffleCards());
  }

  return (
    <>
      <Header>
        <Title>
          Memory
        </Title>
        <Timer />
        <ResultsTableButton>
          Results
        </ResultsTableButton>
      </Header>
      <StartButton onClick={onStart}>
        {!gameWasStarted ? 'start' : 'restart'}
      </StartButton>
      <Cards />
    </>
  );
}

export default App;
