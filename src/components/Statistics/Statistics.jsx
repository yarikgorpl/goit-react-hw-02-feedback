import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Statistics</h2>
      <p className={css.text}>Good:{good}</p>
      <p className={css.text}>Neutral:{neutral}</p>
      <p className={css.text}>Bad:{bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive feedback:{positivePercentage}</p>
    </div>
  );
};

export default Statistics;
