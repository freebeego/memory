import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const fetchResults = createAsyncThunk(
  'results/fetchResults',
  async () => await api.getResults()
);

const addNewResult = createAsyncThunk(
  'results/addNewResult',
  async (newResult) => api.saveResult(newResult)
);

export {
  fetchResults,
  addNewResult
};
