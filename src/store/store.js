import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './cards/cardsSlice';
import timerSlice from './timer/timerSlice';

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    timer: timerSlice
  },
});
