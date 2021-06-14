import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  openPairCards,
  setSelectedCard,
  unsetSelectedCards,
  shuffleCards,
  start, finish
} from './gameSlice';
import { TRANSITION_TIME } from '../../config/constants';
import { startTimer, stopTimer } from '../timer/timerSlice';
import { openSaveResult } from '../popups/popupsSlice';

let timeoutId = null;

const startGame = createAsyncThunk(
  'game/startGame',
  (_, { dispatch }) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    dispatch(start());
    setTimeout(
      () => {
        dispatch(shuffleCards());
        dispatch(startTimer());
      },
      TRANSITION_TIME * 400
    );
  }
);

const selectCard = createAsyncThunk(
  'game/selectCard',
  (card, { dispatch, getState }) => {
    const game = getState().game;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (game.secondSelectedCard || !game.firstSelectedCard) {
      if (game.firstSelectedCard && (game.firstSelectedCard.path === game.secondSelectedCard.path)) {
        dispatch(openPairCards(game.firstSelectedCard));
        dispatch(unsetSelectedCards());
      }
      dispatch(setSelectedCard(card));
      timeoutId = setTimeout(
        () => {
          dispatch(unsetSelectedCards());
        },
        5000
      );
    } else if (game.firstSelectedCard) {
      dispatch(setSelectedCard(card));
      timeoutId = setTimeout(
        () => {
          if (card.path === game.firstSelectedCard.path) {
            dispatch(openPairCards(card));
          }
          dispatch(unsetSelectedCards());
        },
        1000
      );
    }
  }
);

const finishGame = createAsyncThunk(
  'game/finishGame',
  (_, { dispatch }) => {
    dispatch(stopTimer());
    dispatch(finish());
    dispatch(openSaveResult());
  }
);

export {
  startGame,
  selectCard,
  finishGame
};
