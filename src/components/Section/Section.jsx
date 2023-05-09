import React, { Children } from 'react';
import css from 'components/Section/Section.module.css';
import PropTypes from 'prop-types';
const Section = ({ title }) => {
  return (
    <section>
      <h1 className={css.title}>{title} </h1>
      {Children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
