import React from 'react';
import css from 'components/Controls/Controls.module.css';

const Controls = ({ onButtonClick, option }) => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Please leave feedback </h1>
      <ul className={css.list}>
        {option.map(item => (
          <li className={css.item} key={item}>
            <button
              type="button"
              className={css.button}
              onClick={onButtonClick}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Controls;
