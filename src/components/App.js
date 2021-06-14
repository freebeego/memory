import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startGame } from '../store/game/thunks';
import { selectIsResultsOpened, selectIsSaveResultOpened } from '../store/popups/selectors';
import { selectIsGameStarted } from '../store/game/selectors';
import Header from './Header';
import Cards from './Cards';
import Popup from './Popup';
import YourTime from './YourTime';
import SaveTimeForm from './SaveTimeForm';
import Results from './Results';
import StartButton from './StartButton/StartButton';

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

App.propTypes = {
  isGameStarted: PropTypes.bool.isRequired,
  isSaveResultOpened: PropTypes.bool.isRequired,
  isResultsOpened: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
