import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { AccordionStateType } from 'src/types/accordion';

const initialState: AccordionStateType = {
  openItem: false,
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
