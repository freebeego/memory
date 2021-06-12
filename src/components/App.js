import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { hideAllCards, shuffleCards, startGame } from '../store/game/gameSlice';
import { startTimer } from '../store/timer/timerSlice';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import Popup from './Popup/Popup';
import YourTime from './YourTime/YourTime';
import SaveTimeForm from './SaveTimeForm/SaveTimeForm';
import Results from './Results/Results';

const StartButton = styled.button`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #f0f8ff;
  border-radius: 15px;
  border: 1px solid #000;
  width: 133px;
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
  const popups = useSelector(state => state.popups);

  function onStart() {
    if (!gameWasStarted) {
      dispatch(startGame());
    } else {
      dispatch(hideAllCards());
    }

    dispatch(startTimer());
    dispatch(shuffleCards());
  }
  console.log('app');
  console.log(popups.isSaveResultOpened)
  return (
    <>
      <Header />
      <StartButton onClick={onStart}>
        {!gameWasStarted ? 'start' : 'restart'}
      </StartButton>
      <Cards />
      <Popup
        isOpen={popups.isSaveResultOpened}
        title="Congratulations! You win!"
      >
        <YourTime />
        <SaveTimeForm />
      </Popup>
      <Popup
        isOpen={popups.isResultsOpened}
        title="Results"
      >
        <Results />
      </Popup>
    </>
  );
}

export default App;
