import data from 'src/data/data.json';

import { Accordion } from 'src/components/Accordion/Accordion';

export const FrequentlyAskedQuestions = () => {
  return <Accordion items={data} />;
};
