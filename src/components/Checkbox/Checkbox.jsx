import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import classes from './Checkbox.module.scss';

const Checkbox = ({ value, className }) => {
  const classNames = cn([
    className,
    classes.container
  ]);

  return (
    <label className={ classNames } key={value} >
      <input type="checkbox" className={ classes.input } />
      <span className={ classes.mark } />
      {value}
    </label>
  )
};

Checkbox.defaultProps = {
  value: '',
  className: ''
};

Checkbox.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string
};

export default Checkbox;