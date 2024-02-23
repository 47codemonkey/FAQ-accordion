import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { accordionReducer } from './FAQ/accordionSlice';

export const store = configureStore({
  reducer: {
    accordion: accordionReducer,
  },
  devTools: devToolsEnhancer(),
});
