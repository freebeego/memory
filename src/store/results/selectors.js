const selectResults = (state) => state.results.results;
const selectLastResult = (state) => state.results.lastResult;
const selectFetchStatus = (state) => state.results.fetchStatus;

export {
  selectResults,
  selectLastResult,
  selectFetchStatus
};
