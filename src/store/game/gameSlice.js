import { createSlice } from '@reduxjs/toolkit';
import { images } from '../../config/constants';
import makeCard from '../../utils/makeCard';
import shuffle from '../../utils/shuffle';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    cards: images.reduce(
      (acc, image) => [
        ...acc,
        makeCard(image),
        makeCard(image)
      ],
      []
    ),
    isStarted: false,
    isFinished: false,
    firstSelectedCard: null,
    secondSelectedCard: null,
    hiddenCardsNumber: null
  },
  reducers: {
    shuffleCards: (state) => {
      const images = state.cards.reduce((acc, card) => [ ...acc, card.path ], []);
      const shuffledImages = shuffle(images);
      state.cards = state.cards.reduce(
        (acc, card, index) => {
          const updatedCard = { ...card, path: shuffledImages[index] };
          return [ ...acc, updatedCard ];
        },
        []
      );
    },
    openPairCards: (state, action) => {
      state.cards = state.cards.map((card) => card.path === action.payload.path ? { ...card, isVisible: false } : card);
      state.hiddenCardsNumber = state.hiddenCardsNumber - 2;
    },
    setSelectedCard: (state, action) => {
      if (!state.firstSelectedCard) {
        state.firstSelectedCard = action.payload;
      } else if (!state.secondSelectedCard) {
        state.secondSelectedCard = action.payload;
      } else {
        state.firstSelectedCard = action.payload;
        state.secondSelectedCard = null;
      }
    },
    unsetSelectedCards: (state) => {
      state.firstSelectedCard = null;
      state.secondSelectedCard = null;
    },
    start: (state) => {
      state.firstSelectedCard = null;
      state.secondSelectedCard = null;
      state.isStarted = true;
      state.isFinished = false;
      state.hiddenCardsNumber = state.cards.length;
      state.cards = state.cards.map((card) => ({ ...card, isVisible: true }));
    },
    finish: (state) => {
      state.isStarted = false;
      state.isFinished = true;
      state.hiddenCardsNumber = null;
      state.cards = state.cards.map((card) => ({ ...card, isVisible: true }));
    }
  }
});

export const {
  shuffleCards,
  openPairCards,
  setSelectedCard,
  unsetSelectedCards,
  start,
  finish
} = gameSlice.actions;

export default gameSlice.reducer;
