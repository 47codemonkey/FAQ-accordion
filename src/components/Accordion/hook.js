import { useSelector, useDispatch } from 'react-redux';

import { selectAccordionItem } from '../../store/FAQ/accrodionSelectors';
import { toggleAccordion } from '../../store/FAQ/accordionSlice';

export const useAccordion = () => {
  const openItem = useSelector(selectAccordionItem);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(toggleAccordion(id));
  };

  return { openItem, handleClick };
};
