import { createSlice } from '@reduxjs/toolkit';

export const winnersSlice = createSlice({
  name: 'winners',
  initialState: {
    names: [],
  },
  reducers: {
    setWinners: (state, action) => {
      state.names = action.payload;
    }
  }
});

export const {
  setWinners
} = winnersSlice.actions;

export default winnersSlice.reducer;
