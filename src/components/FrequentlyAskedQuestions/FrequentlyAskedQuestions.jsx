import data from '../../data/data.json';

import { Accordion } from '../Accordion/Accordion';

export const FrequentlyAskedQuestions = () => {
  return <Accordion items={data} />;
};
