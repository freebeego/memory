const selectDelta = (state) => state.timer.delta;
const selectIsTimerStarted = (state) => state.timer.isStarted;

export {
  selectDelta,
  selectIsTimerStarted
};
