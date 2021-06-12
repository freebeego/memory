import { createSlice, nanoid } from '@reduxjs/toolkit';
import { images } from '../../config/constants';
import shuffle from '../../utils/shuffle';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    cards: images.reduce(
      (acc, image) => [
        ...acc,
        { id: nanoid(), isOpen: false, path: image },
        { id: nanoid(), isOpen: false, path: image }
      ],
      []
    ),
    wasStarted: false,
    shownCard: {}
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
    openPairedCards: (state, action) => {
      state.cards = state.cards.map((card) => card.path === action.payload.path ? { ...card, isOpen: true } : card);
      state.shownCard = {};
    },
    showCard: (state, action) => {
      state.shownCard = action.payload;
    },
    hideShownCard: (state) => {
      state.shownCard = {};
    },
    hideAllCards: (state) => {
      state.cards = state.cards.map((card) => ({ ...card, isOpen: false }));
      state.shownCard = {};
    },
    startGame: (state) => {
      state.wasStarted = true;
      state.cardsWereShuffled = false;
    }
  }
});

export const {
  shuffleCards,
  openPairedCards,
  showCard,
  hideShownCard,
  startGame,
  hideAllCards
} = gameSlice.actions;

export default gameSlice.reducer;
