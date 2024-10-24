/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import IAppState from '../redux_modal/app_modal';
import {RootState} from '../rootReducer';

const DEFAULT_STATE: IAppState = {
  appSliceStatus: undefined,
  name: '',
  description: '',
  price: '',
  images: [
    { id: 1, image: null },
    { id: 2, image: null },
    { id: 3, image: null },
    { id: 4, image: null },
    { id: 5, image: null },
  ],
  sampleDataSet2: [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/15/89/9b/15899badd96dda43b56251ea08883acf.jpg',
      description: 'You read this blog regularly, you’ll notice something about our blog posts’ titles',
      price: '293.26',
    },
    {
      id: 2,
      image: 'https://live.staticflickr.com/1830/42431721684_70cf30535b_b.jpg',
      description: 'You read this blog regularly, you’ll notice something about our blog posts’ titles',
      price: '293.26',
    },
  ],
};

const INITIAL_STATE: IAppState = {
  ...DEFAULT_STATE,
};

const app_slice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    resetApp: () => {
      return DEFAULT_STATE;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUserDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setUserPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setUserImages: (state, action: PayloadAction<Array<{ id: number; image: string | null }>>) => {
      state.images = action.payload;
    }
  },
});

export const {
  resetApp,
  setUserName,
  setUserDescription,
  setUserPrice,
  setUserImages,
} = app_slice.actions;

export const selectAppSliceStatus = (state: RootState) =>
  state.app.appSliceStatus;
export const selectAppName = (state: RootState) => state.app.name;
export const selectAppDescription = (state: RootState) => state.app.description;
export const selectAppPrice = (state: RootState) => state.app.price;
export const selectAppImages = (state: RootState) => state.app.images;

// New Selector for sampleDataSet2
export const selectSampleDataSet2 = (state: RootState) => state.app.sampleDataSet2;

export default app_slice;
