import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './game/gameSlice';
import timerSlice from './timer/timerSlice';
import resultsSlice from './results/resultsSlice';
import popupsSlice from './popups/popupsSlice';

export const store = configureStore({
  reducer: {
    game: gameSlice,
    timer: timerSlice,
    results: resultsSlice,
    popups: popupsSlice
  },
});
