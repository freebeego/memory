import { createSlice } from '@reduxjs/toolkit';

const resultsSlice = createSlice({
  name: 'results',
  initialState: [],
  reducers: {
    setCards: (state, action) => {
      return action.payload.sort((a, b) => a.time - b.time);
    },
    addCard: (state, action) => {
      return [ ...state, action.payload].sort((a, b) => a.time - b.time);
    }
  }
});

export const {
  setCards,
  addCard
} = resultsSlice.actions;

export default resultsSlice.reducer;
