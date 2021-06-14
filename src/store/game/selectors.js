const selectCards = (state) => state.game.cards;
const selectIsGameStarted = (state) => state.game.isStarted;
const selectIsGameFinished = (state) => state.game.isFinished;
const selectFirstSelectedCard = (state) => state.game.firstSelectedCard;
const selectSecondSelectedCard = (state) => state.game.secondSelectedCard;
const selectHiddenCardsNumber = (state) => state.game.hiddenCardsNumber;

export {
  selectCards,
  selectIsGameStarted,
  selectIsGameFinished,
  selectFirstSelectedCard,
  selectSecondSelectedCard,
  selectHiddenCardsNumber
};
