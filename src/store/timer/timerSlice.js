import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    isStarted: false,
    start: 0,
    delta: 0
  },
  reducers: {
    startTimer: (state) => {
      state.isStarted = true;
      state.start = Date.now();
      state.delta = 0;
    },
    stopTimer: (state) => {
      state.isStarted = false;
    },
    tickTimer: (state) => {
      state.delta = Math.floor((Date.now() - state.start) / 1000);
    }
  }
});

export const {
  startTimer,
  stopTimer,
  tickTimer
} = timerSlice.actions;

export default timerSlice.reducer;
