import { createSlice } from '@reduxjs/toolkit';
import { images } from '../../config/constants';
import shuffle from '../../utils/shuffle';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: images.reduce((acc, image) => [ ...acc, image, image ], []),
  reducers: {
    shuffleCards: (state) => {
      state = shuffle(state);
    }
  }
});

export const {
  shuffleCards
} = cardsSlice.actions;

export default cardsSlice.reducer;
