const selectResults = (state) => state.results.results;
const selectFetchStatus = (state) => state.results.fetchStatus;

export {
  selectResults,
  selectFetchStatus
};
