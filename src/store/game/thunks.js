import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  openPairCards,
  setSelectedCard,
  unsetSelectedCards,
  setTimeoutId,
  shuffleCards,
  start, unsetTimeoutId, finish
} from './gameSlice';
import { TRANSITION_TIME } from '../../config/constants';
import { startTimer, stopTimer } from '../timer/timerSlice';
import { openSaveResult } from '../popups/popupsSlice';

const startGame = createAsyncThunk(
  'game/startGame',
  (_, { dispatch }) => {
    dispatch(start());
    setTimeout(
      () => {
        dispatch(shuffleCards());
        dispatch(startTimer());
      },
      TRANSITION_TIME * 1000
    );
  }
);

const selectCard = createAsyncThunk(
  'game/selectCard',
  (card, { dispatch, getState }) => {
    let timeoutId = 0;
    const state = getState().game;
    if (state.timeoutId) {
      clearTimeout(state.timeoutId);
      dispatch(unsetTimeoutId());
    }
    if (state.secondSelectedCard || !state.firstSelectedCard) {
      if (state.firstSelectedCard && (state.firstSelectedCard.path === state.secondSelectedCard.path)) {
        dispatch(openPairCards(state.firstSelectedCard));
        dispatch(unsetSelectedCards());
      }
      dispatch(setSelectedCard(card));
      timeoutId = setTimeout(
        () => {
          dispatch(unsetSelectedCards());
        },
        5000
      );
      dispatch(setTimeoutId(timeoutId))
    } else if (state.firstSelectedCard) {
      dispatch(setSelectedCard(card));
      timeoutId = setTimeout(
        () => {
          if (card.path === state.firstSelectedCard.path) {
            dispatch(openPairCards(card));
          }
          dispatch(unsetSelectedCards());
        },
        1000
      );
      dispatch(setTimeoutId(timeoutId))
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
