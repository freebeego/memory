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
    closeSaveResult: (state) => {
      state.isSaveResultOpened = false;
    },
    openResults: (state) => {
      state.isResultsOpened = true;
    },
    closeResults: (state) => {
      state.isResultsOpened = false;
    }
  }
});

export const {
  openSaveResult,
  closeSaveResult,
  openResults,
  closeResults
} = popupsSlice.actions;

export default popupsSlice.reducer;
