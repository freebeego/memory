import { createSlice } from '@reduxjs/toolkit';

const popupsSlice = createSlice({
  name: 'popups',
  initialState: {
    isSaveResultOpened: false,
    isResultsOpened: false,
  },
  reducers: {
    openSaveResult: (state) => {
      state.isSaveResultOpened = true;
    },
    openResults: (state) => {
      state.isResultsOpened = true;
    },
    closePopups: (state) => {
      state.isSaveResultOpened = false;
      state.isResultsOpened = false;
    },
  }
});

export const {
  openSaveResult,
  openResults,
  closePopups
} = popupsSlice.actions;

export default popupsSlice.reducer;
