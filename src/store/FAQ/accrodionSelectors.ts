import { RootState } from 'src/store/index';

export const selectAccordionItem = (state: RootState) => state.accordion.openItem;
