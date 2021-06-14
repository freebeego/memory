import { nanoid } from '@reduxjs/toolkit';

const makeCard = (image) => ({ id: nanoid(), isVisible: true, path: image });

export default makeCard;
