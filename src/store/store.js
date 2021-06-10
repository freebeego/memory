import { configureStore } from '@reduxjs/toolkit';
import winnerReducer from './winners/winnersSlice';

export const store = configureStore({
  reducer: {
    winners: winnerReducer,
  },
});
