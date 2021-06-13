import { createSlice } from '@reduxjs/toolkit';
import { addNewResult, fetchResults } from './thunks';
import sortResults from '../../utils/sortResults';

const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    results: [],
    fetchStatus: 'idle'
  },
  reducers: {
    setDefaultFetchStatus: (state) => {
      state.fetchStatus = 'idle';
    }
  },
  extraReducers: {
    [fetchResults.fulfilled]: (state, action) => {
      state.results = sortResults(action.payload);
    },
    [addNewResult.pending]: (state) => {
      state.fetchStatus = 'loading';
    },
    [addNewResult.fulfilled]: (state, action) => {
      state.fetchStatus = 'succeeded';
      state.results = sortResults([ ...state.results, action.payload]);
    },
    [addNewResult.rejected]: (state) => {
      state.fetchStatus = 'failed';
    }
  }
});

export const {
  setDefaultFetchStatus
} = resultsSlice.actions;

export default resultsSlice.reducer;
