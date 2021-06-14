import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { startGame } from '../store/game/thunks';
import Header from './Header/Header';
import Cards from './Cards/Cards';
import Popup from './Popup/Popup';
import YourTime from './YourTime/YourTime';
import SaveTimeForm from './SaveTimeForm/SaveTimeForm';
import Results from './Results/Results';
import { selectIsResultsOpened, selectIsSaveResultOpened } from '../store/popups/selectors';
import { selectIsGameStarted } from '../store/game/selectors';

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

function App({ isGameStarted, isSaveResultOpened, isResultsOpened, startGame }) {
  return (
    <>
      <Header />
      <StartButton onClick={startGame}>
        {!isGameStarted ? 'start' : 'restart'}
      </StartButton>
      <Cards />
      <Popup
        isOpen={isSaveResultOpened}
        title="Congratulations! You win!"
      >
        <YourTime />
        <SaveTimeForm />
      </Popup>
      <Popup
        isOpen={isResultsOpened}
        title="Results"
      >
        <Results />
      </Popup>
    </>
  );
}

const mapStateToProps = (state) => ({
  isGameStarted: selectIsGameStarted(state),
  isSaveResultOpened: selectIsSaveResultOpened(state),
  isResultsOpened: selectIsResultsOpened(state)
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch(startGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
