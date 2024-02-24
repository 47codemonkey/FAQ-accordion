import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  openItem: false as number | boolean,
};

export const accordionSlice = createSlice({
  name: 'accordion',
  initialState,
  reducers: {
    toggleAccordion(state, action: PayloadAction<number>) {
      state.openItem = state.openItem === action.payload ? false : action.payload;
    },
  },
});

export const { toggleAccordion } = accordionSlice.actions;

export const accordionReducer = accordionSlice.reducer;
