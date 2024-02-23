import { useSelector, useDispatch } from 'react-redux';

import { selectExpandedItem } from '../../store/accordion/toggleSelectors';
import { toggleAccrodion } from '../../store/accordion/toggleActions';

export const useAccordion = () => {
  const expandedItem = useSelector(selectExpandedItem);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(toggleAccrodion(id));
  };

  return { expandedItem, handleClick };
};
