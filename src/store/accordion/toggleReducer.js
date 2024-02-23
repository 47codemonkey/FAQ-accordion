import { TOGGLE_ACCORDION } from './toggleConst';

const initialState = {
  expandedItem: false,
};

export const accordionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACCORDION:
      return {
        ...state,
        expandedItem: state.expandedItem === action.payload ? false : action.payload,
      };
    default:
      return state;
  }
};
