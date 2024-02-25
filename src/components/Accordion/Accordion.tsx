import { useAccordion } from './hook';
import { IconPlus } from 'src/assets/icons/IconPlus';
import { IconMinus } from 'src/assets/icons/IconMinus';
import { IconStar } from 'src/assets/icons/IconStar';

import './accordion.css';

type Item = {
  id: number;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: Item[];
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const { openItem, handleClick } = useAccordion();

  return (
    <div className="container">
      <div className="faq_wrapper">
        <div className="faq_title_wrapper">
          <IconStar />
          <h1 className="faq_title">FAQs</h1>
        </div>
        <ul className="faq_list">
          {items.map(({ id, question, answer }: Item) => (
            <li key={id} className="faq_item" onClick={() => handleClick(id)}>
              {question}
              {openItem === id ? <IconMinus /> : <IconPlus />}
              {openItem === id ? <div className="faq_answer">{answer}</div> : false}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// import { useState } from 'react';

// import {IconPlus} from '../../assets/icons/IconPlus'
// import {IconMinus} from '../../assets/icons/IconMinus'

// export const Accordion = ({ items }) => {
//   const [expandedItem, setExpandedItem] = useState(false);

//   const handleClick = (id) => {
//     setExpandedItem((prevExpandedItem) => (prevExpandedItem === id ? false : id));
//   };

//   return (
//     <div className="wrapper">
//       <h1>FAQs</h1>
//       <div className="accordion-item">
//         {items.map(({ id, question, answer }) => (
//           <div key={id}>
//             <div onClick={() => handleClick(id)}>
//               {question}
//               {expandedItem === id ? <IconMinus /> : <IconPlus />}
//             </div>
//             {expandedItem === id ? <p>{answer}</p> : false}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

//////////////////////////////////////////////////////////

// import { useSelector, useDispatch } from 'react-redux';

// import { selectExpandedItem } from '../../store/accordion/toggle_selectors';
// import { toggleAccrodion } from '../../store/accordion/toggle_actions';

// import { IconPlus } from '../../assets/icons/IconPlus';
// import { IconMinus } from '../../assets/icons/IconMinus';

// export const Accordion = ({ items }) => {
//   const expandedItem = useSelector(selectExpandedItem);
//   const dispatch = useDispatch();

//   const handleClick = (id) => {
//     dispatch(toggleAccrodion(id));
//   };

//   return (
//     <div className="wrapper">
//       <h1>FAQs</h1>
//       <div className="accordion-item">
//         {items.map(({ id, question, answer }) => (
//           <div key={id}>
//             <div onClick={() => handleClick(id)}>
//               {question}
//               {expandedItem === id ? <IconMinus /> : <IconPlus />}
//             </div>
//             {expandedItem === id ? <p>{answer}</p> : false}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

///////////////////////////////////////////////////////////////
