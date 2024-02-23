import { TOGGLE_ACCORDION } from './toggleConst';

export const toggleAccrodion = (id) => ({
  type: TOGGLE_ACCORDION,
  payload: id,
});
