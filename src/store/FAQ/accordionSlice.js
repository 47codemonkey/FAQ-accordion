import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openItem: false,
};

export const accordionSlice = createSlice({
  name: 'accordion',
  initialState,
  reducers: {
    toggleAccordion(state, action) {
      state.openItem = state.openItem === action.payload ? false : action.payload;
    },
  },
});

export const { toggleAccordion } = accordionSlice.actions;

export const accordionReducer = accordionSlice.reducer;
