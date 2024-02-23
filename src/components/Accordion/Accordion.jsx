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

import { useAccordion } from './hook';

import { IconPlus } from '../../assets/icons/IconPlus';
import { IconMinus } from '../../assets/icons/IconMinus';

export const Accordion = ({ items }) => {
  const { openItem, handleClick } = useAccordion();

  return (
    <div className="wrapper">
      <h1>FAQs</h1>
      <div className="accordion-item">
        {items.map(({ id, question, answer }) => (
          <div key={id}>
            <div onClick={() => handleClick(id)}>
              {question}
              {openItem === id ? <IconMinus /> : <IconPlus />}
            </div>
            {openItem === id ? <p>{answer}</p> : false}
          </div>
        ))}
      </div>
    </div>
  );
};
