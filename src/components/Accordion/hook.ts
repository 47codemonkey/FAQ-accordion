import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'src/store/index';
import { selectAccordionItem } from 'src/store/FAQ/accrodionSelectors';
import { toggleAccordion } from 'src/store/FAQ/accordionSlice';

type UseAccordionHook = {
  openItem: number | boolean;
  handleClick: (id: number) => void;
};

export const useAccordion = (): UseAccordionHook => {
  const openItem = useSelector((state: RootState) => selectAccordionItem(state));
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (id: number) => {
    dispatch(toggleAccordion(id));
  };

  return { openItem, handleClick };
};
