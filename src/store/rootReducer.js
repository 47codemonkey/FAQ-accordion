import { combineReducers } from '@reduxjs/toolkit';

import { accordionReducer } from './accordion/toggleReducer';

export const rootReducer = combineReducers({
  accordionReducer,
});
